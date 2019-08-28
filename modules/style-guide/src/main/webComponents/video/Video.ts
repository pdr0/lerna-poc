import { LitElement, html, property, query } from "lit-element";
import { customElement } from "../customElement";
import styles from "./Video.lit.scss";

@customElement("ll-video")
export class Video extends LitElement {
    @property({ type: String }) type = "video/mp4";
    @property({ type: String }) src = null;
    @property({ type: String }) imgSrc = null;
    @property({ type: String }) imgSrcSet = null;
    @property({ type: Number }) ratio = 1.777777;
    @property({ type: Boolean }) mobile = false;

    private manual: boolean = false;
    static styles = [styles];

    @query(".container") containerElement!: HTMLElement;
    @query("video") videoElement!: HTMLVideoElement;

    private mouseOutHandler() {
        !this.manual && this.videoElement && this.videoElement.pause();
    }

    private mouseOverHandler() {
        !this.manual && this.videoElement && this.videoElement.play();
    }

    private clickHandler(event: Event) {
        if (this.manual) {
            return;
        }

        this.manual = true;
        if (this.containerElement) {
            this.containerElement.dataset.manual = "true";
        }
        if (this.videoElement) {
            this.videoElement.pause();
            this.videoElement.currentTime = 0;
            this.videoElement.muted = false;
            this.videoElement.controls = true;
            this.videoElement.play();
            if (this.mobile) {
                this.openFullscreen();
            }
        }
        event.preventDefault();
    }

    openFullscreen() {
        if (this.videoElement.requestFullscreen) {
            this.videoElement.requestFullscreen();
            return;
        }
        // @ts-ignore
        if (this.videoElement.webkitRequestFullscreen) {
            // @ts-ignore
            this.videoElement.webkitRequestFullscreen();
        }
    }

    private tID: number | null = null;
    private resize = () => {
        window.requestAnimationFrame(() => {
            this.containerElement.style.height = this.containerElement.offsetWidth / this.ratio + "px";
        });
    };

    private resizeHandler = () => {
        if (this.tID !== null) {
            window.clearTimeout(this.tID);
        }
        this.tID = window.setTimeout(this.resize, 50);
    };

    firstUpdated() {
        window.addEventListener("resize", this.resizeHandler);
        this.resize();
    }

    disconnectedCallback() {
        window.removeEventListener("change", this.resizeHandler);
        super.disconnectedCallback();
    }

    private renderingSmart() {
        return html`
            <div
                class="container"
                @mouseout="${this.mouseOutHandler}"
                @mouseover="${this.mouseOverHandler}"
                @click="${this.clickHandler}"
            >
                <img src="${this.imgSrc}" srcset="${this.imgSrcSet}" />
                <video preload="none" muted>
                    <source type="${this.type}" src="${this.src}" />
                </video>
            </div>
        `;
    }

    private renderingManual() {
        return html`
            <div class="container" data-manual="true">
                <video preload="auto" controls>
                    <source type="${this.type}" src="${this.src}" />
                </video>
            </div>
        `;
    }

    render() {
        return this.imgSrcSet && this.imgSrc ? this.renderingSmart() : this.renderingManual();
    }
}
