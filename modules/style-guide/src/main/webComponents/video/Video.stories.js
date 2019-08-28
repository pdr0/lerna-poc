import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs/react";
import "./Video";

storiesOf("Web Components/Video", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add("default", () => {
        return (
            <React.Fragment>
                <h2>Video with preview</h2>

                <ll-video
                    type="video/mp4"
                    src="https://player.vimeo.com/external/308735032.sd.mp4?s=1eb70c0f0f328cfbaae7f5b03123a387aea10e50&amp;profile_id=164&amp;oauth2_token_id=57447761"
                    imgSrc="https://images.pexels.com/videos/1739010/free-video-1739010.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                    imgSrcSet="https://images.pexels.com/videos/1739010/free-video-1739010.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/videos/1739010/free-video-1739010.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x"
                ></ll-video>
                <br />
                <br />
                <br />

                <h2>Video without preview</h2>
                <ll-video
                    type="video/mp4"
                    src="https://player.vimeo.com/external/308735032.sd.mp4?s=1eb70c0f0f328cfbaae7f5b03123a387aea10e50&amp;profile_id=164&amp;oauth2_token_id=57447761"
                ></ll-video>
                <br />
                <br />
                <br />

                <h2>Video with different rate</h2>
                <ll-video
                    type="video/mp4"
                    ratio={0.5625}
                    src="https://player.vimeo.com/external/317360351.sd.mp4?s=811d66428c1436bb1e40581c5f622f435103fc1c&profile_id=165&oauth2_token_id=57447761"
                    imgSrc="https://images.pexels.com/videos/1906755/free-video-1906755.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                    imgSrcSet="https://images.pexels.com/videos/1906755/free-video-1906755.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/videos/1906755/free-video-1906755.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x"
                ></ll-video>
                <br />
                <br />
                <br />

                <h2>Video with mobile behaviour</h2>
                <ll-video
                    type="video/mp4"
                    ratio={0.5625}
                    mobile={true}
                    src="https://player.vimeo.com/external/317360351.sd.mp4?s=811d66428c1436bb1e40581c5f622f435103fc1c&profile_id=165&oauth2_token_id=57447761"
                    imgSrc="https://images.pexels.com/videos/1906755/free-video-1906755.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                    imgSrcSet="https://images.pexels.com/videos/1906755/free-video-1906755.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/videos/1906755/free-video-1906755.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x"
                ></ll-video>
            </React.Fragment>
        );
    });
