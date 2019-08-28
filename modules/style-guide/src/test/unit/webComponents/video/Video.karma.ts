import sinon from "sinon";
import {fixture} from "@open-wc/testing-helpers";
import {Video} from "../../../../main/webComponents/video/Video";

describe("Video tests", () => {
    it("Should render manual", async () => {
        const element: Video = await fixture(`<ll-video src="fakeSrc" type="fakeType"></ll-video>`);
        expect(element instanceof Video).toBe(true);
        const shadowRoot = element.shadowRoot!;
        expect(shadowRoot.querySelectorAll(".container").length).toBe(1);
        expect(shadowRoot.querySelectorAll("img").length).toBe(0);
        expect(shadowRoot.querySelectorAll("video").length).toBe(1);
        expect(shadowRoot.querySelectorAll("source").length).toBe(1);

        expect(shadowRoot.querySelector(".container")!.getAttribute("data-manual")).toBe("true");

        expect(shadowRoot.querySelector("video")!.hasAttribute("controls")).toBe(true);
        expect(shadowRoot.querySelector("video")!.getAttribute("preload")).toBe("auto");

        expect(shadowRoot.querySelector("source")!.getAttribute("src")).toBe("fakeSrc");
        expect(shadowRoot.querySelector("source")!.getAttribute("type")).toBe("fakeType");

    });

    it("Should render smart", async () => {
        const element: Video = await fixture(`<ll-video src="fakeSrc" type="fakeType" imgSrc="fakeImgSrc" imgSrcSet="fakeImgSrcSet"></ll-video>`);
        expect(element instanceof Video).toBe(true);
        const shadowRoot = element.shadowRoot!;
        expect(shadowRoot.querySelectorAll(".container").length).toBe(1);
        expect(shadowRoot.querySelectorAll("img").length).toBe(1);
        expect(shadowRoot.querySelectorAll("video").length).toBe(1);
        expect(shadowRoot.querySelectorAll("source").length).toBe(1);

        expect(shadowRoot.querySelector(".container")!.hasAttribute("data-manual")).toBe(false);

        expect(shadowRoot.querySelector("video")!.hasAttribute("controls")).toBe(false);
        expect(shadowRoot.querySelector("video")!.hasAttribute("muted")).toBe(true);
        expect(shadowRoot.querySelector("video")!.getAttribute("preload")).toBe("none");

        expect(shadowRoot.querySelector("source")!.getAttribute("src")).toBe("fakeSrc");
        expect(shadowRoot.querySelector("source")!.getAttribute("type")).toBe("fakeType");

        expect(shadowRoot.querySelector("img")!.getAttribute("src")).toBe("fakeImgSrc");
        expect(shadowRoot.querySelector("img")!.getAttribute("srcSet")).toBe("fakeImgSrcSet");

    });

    it("Should play video when mouse is over/out container", async () => {
        const element: Video = await fixture(`<ll-video src="fakeSrc" type="fakeType" imgSrc="fakeImgSrc" imgSrcSet="fakeImgSrcSet"></ll-video>`);
        const containerElement = element.shadowRoot!.querySelector(".container")! as HTMLDivElement;
        const videoElement = element.shadowRoot!.querySelector("video")! as HTMLVideoElement;

        const play = sinon.spy(videoElement, "play");
        const pause = sinon.spy(videoElement, "pause");

        containerElement.dispatchEvent(new KeyboardEvent("mouseover"));
        expect(play.calledOnce).toBe(true);

        containerElement.dispatchEvent(new KeyboardEvent("mouseout"));
        expect(pause.calledOnce).toBe(true);
        play.restore();
        pause.restore();
    });

    it("Should switch to manual mode and play video when user clicks", async () => {
        const element: Video = await fixture(`<ll-video src="fakeSrc" type="fakeType" imgSrc="fakeImgSrc" imgSrcSet="fakeImgSrcSet"></ll-video>`);
        const containerElement = element.shadowRoot!.querySelector(".container")! as HTMLDivElement;
        const videoElement = element.shadowRoot!.querySelector("video")! as HTMLVideoElement;

        const play = sinon.spy(videoElement, "play");
        const pause = sinon.spy(videoElement, "pause");

        containerElement.dispatchEvent(new KeyboardEvent("click"));
        expect(pause.calledOnce).toBe(true);
        expect(play.calledOnce).toBe(true);
        expect(containerElement.getAttribute("data-manual")).toBe("true");

        play.restore();
        pause.restore();
    });

    it("Should switch to fullscreen mode when user clicks in mobile", async () => {
        const element: Video = await fixture(`<ll-video src="fakeSrc" type="fakeType" imgSrc="fakeImgSrc" imgSrcSet="fakeImgSrcSet" mobile></ll-video>`);
        const containerElement = element.shadowRoot!.querySelector(".container")! as HTMLDivElement;
        const openFullscreen = sinon.spy(element, "openFullscreen");

        containerElement.dispatchEvent(new KeyboardEvent("click"));
        expect(openFullscreen.calledOnce).toBe(true);

        openFullscreen.restore();
    });
});