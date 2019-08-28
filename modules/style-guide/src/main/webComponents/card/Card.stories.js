import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { text, withKnobs } from "@storybook/addon-knobs/react";
import "../../webComponents/typography/MarketingHeadline";
import "../../webComponents/typography/Typography";
import "../../webComponents/video/Video";
import "../../webComponents/card/Card";

storiesOf("Web Components/Card", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add("default", () => {
        const title = text("Title", "Bolão Virtual - Como funciona?");
        const paragraph = text(
            "Paragraph",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur dignissimos eaque eos est et magnam nisi nostrum quae quas, quia saepe totam voluptatibus?"
        );

        const textContent = (
            <React.Fragment>
                <ll-marketing-headline slot="title">
                    <ll-typography size="h4">{title}</ll-typography>
                </ll-marketing-headline>

                <ll-typography size="p" slot="paragraph">
                    {paragraph}
                </ll-typography>
            </React.Fragment>
        );

        const contentImg = (
            <React.Fragment>
                <img
                    slot="media"
                    src="https://st.focusedcollection.com/3075785/i/650/focused_202784660-stock-photo-happy-beautiful-women-standing-beach.jpg"
                    srcSet="https://st.focusedcollection.com/3075785/i/650/focused_202784660-stock-photo-happy-beautiful-women-standing-beach.jpg 700w,
                         https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/S9BPJEp7ioxrxk50/beach-fun-people-laughing-with-water-splashing-couple-on-summer-vacation-lying-on-beautiful-paradise-beach-sand-romantic-woman-and-man-in-love-on-honeymoon-red-epic-slow-motion-96-fps_rn1cl34c_thumbnail-full02.png 1000w"
                />
                {textContent}
            </React.Fragment>
        );

        const contentVideo = (
            <React.Fragment>
                <ll-video
                    slot="media"
                    type="video/mp4"
                    src="https://player.vimeo.com/external/308735032.sd.mp4?s=1eb70c0f0f328cfbaae7f5b03123a387aea10e50&amp;profile_id=164&amp;oauth2_token_id=57447761"
                    imgSrc="https://images.pexels.com/videos/1739010/free-video-1739010.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                    imgSrcSet="https://images.pexels.com/videos/1739010/free-video-1739010.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/videos/1739010/free-video-1739010.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x"
                ></ll-video>
                {textContent}
            </React.Fragment>
        );

        return (
            <React.Fragment>
                <h2>Examples with video</h2>
                <ll-card mediaPosition="right" border={true} mediaFullSize={true}>
                    {contentVideo}
                </ll-card>
                <hr />

                <br />
                <br />

                <ll-card mediaPosition="top">{contentVideo}</ll-card>
                <hr />

                <br />
                <br />

                <h2>Examples with image position</h2>
                <ll-card>{contentImg}</ll-card>
                <hr />
                <ll-card mediaPosition="right">{contentImg}</ll-card>
                <hr />
                <ll-card mediaPosition="top">{contentImg}</ll-card>
                <hr />
                <ll-card mediaPosition="bottom">{contentImg}</ll-card>
                <hr />

                <br />
                <br />

                <h2>Examples with border</h2>
                <ll-card mediaPosition="right" border={true}>
                    {contentImg}
                </ll-card>
                <hr />
                <ll-card mediaPosition="top" border={true}>
                    {contentImg}
                </ll-card>
                <hr />

                <br />
                <br />

                <h2>Examples with image with full size</h2>
                <ll-card mediaPosition="bottom" border={true} mediaFullSize={true}>
                    {contentImg}
                </ll-card>
                <hr />
                <ll-card mediaPosition="top" mediaFullSize={true}>
                    {contentImg}
                </ll-card>
                <hr />
                <ll-card mediaPosition="left" border={true} mediaFullSize={true}>
                    {contentImg}
                </ll-card>
                <hr />
                <ll-card mediaPosition="right" mediaFullSize={true}>
                    {contentImg}
                </ll-card>
                <hr />

                <br />
                <br />

                <h2>Examples with text alignment</h2>
                <ll-card mediaPosition="bottom" border={true} mediaFullSize={true} textAlign="center">
                    {contentImg}
                </ll-card>
                <hr />
                <ll-card mediaPosition="left" textAlign="right">
                    {contentImg}
                </ll-card>
                <hr />

                <br />
                <br />

                <h2>Examples without media</h2>
                <ll-card border={true}>{textContent}</ll-card>
                <hr />
                <ll-card border={true} textAlign="center">
                    {textContent}
                </ll-card>
                <hr />
                <ll-card border={false} textAlign="right">
                    {textContent}
                </ll-card>
                <hr />
            </React.Fragment>
        );
    });
