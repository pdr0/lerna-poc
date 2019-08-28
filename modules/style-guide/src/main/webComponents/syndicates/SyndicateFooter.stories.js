import * as React from "react";
import {storiesOf} from "@storybook/react";
import {withInfo} from "@storybook/addon-info";
import {text, withKnobs} from "@storybook/addon-knobs/react";
import "../../webComponents/typography/MarketingHeadline";
import "../../webComponents/typography/Typography";
import "../../webComponents/card/Card";

storiesOf("Web Components/Syndicates/Syndicate Footer Mock", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add("default", () => {
        const title = text("Title", "Bolão Virtual - Como funciona?");
        const paragraph = text(
            "Paragraph",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur dignissimos eaque eos est et magnam nisi nostrum quae quas, quia saepe totam voluptatibus?"
        );
        const content = (
            <React.Fragment>
                <img
                    slot="media"
                    src="https://media-cdn.tripadvisor.com/media/photo-b/320x120/10/78/09/47/bosana-beach.jpg"
                    srcSet="https://media-cdn.tripadvisor.com/media/photo-b/320x120/10/78/09/47/bosana-beach.jpg 400w,
                         https://previews.123rf.com/images/jackf/jackf1802/jackf180206796/95832434-laughing-family-of-six-people-happily-running-together-on-beach-on-summer-day.jpg 1000w"
                />

                <ll-marketing-headline slot="title">
                    <ll-typography size="h4">{title}</ll-typography>
                </ll-marketing-headline>

                <ll-typography size="p" slot="paragraph">
                    {paragraph}
                </ll-typography>
            </React.Fragment>
        );

        return (
            <React.Fragment>
                <div style={{margin: "21px"}}>
                    <ll-typography size="h8">Bolao da Lottoland!</ll-typography>

                    <img
                        src="https://media-cdn.tripadvisor.com/media/photo-b/320x120/10/78/09/47/bosana-beach.jpg"
                        srcSet="https://media-cdn.tripadvisor.com/media/photo-b/320x120/10/78/09/47/bosana-beach.jpg 400w,
                             https://previews.123rf.com/images/jackf/jackf1802/jackf180206796/95832434-laughing-family-of-six-people-happily-running-together-on-beach-on-summer-day.jpg 1000w"
                        class="ll-margin-xl-bottom ll-margin-md-top"
                        style={{overflow: "hidden", width: "100%", objectFit: "cover"}}
                    />

                    <ll-card textAlign="center">
                        <ll-marketing-headline slot="title">
                            <ll-typography size="h4">{title}</ll-typography>
                        </ll-marketing-headline>

                        <ll-typography size="h6" slot="paragraph">
                            {paragraph}
                        </ll-typography>
                    </ll-card>

                    <ll-typography size="h4" style={{textAlign: "center"}} class="ll-margin-xl-top">
                        Bolão Virtual - Como funciona?
                    </ll-typography>

                    <ll-syndicate-horizontal-layout class="ll-margin-lg-top">
                        <ll-card mediaPosition="top" textAlign="left">
                            {content}
                        </ll-card>

                        <ll-card mediaPosition="top" textAlign="left">
                            {content}
                        </ll-card>

                        <ll-card mediaPosition="top" textAlign="left">
                            {content}
                        </ll-card>
                    </ll-syndicate-horizontal-layout>

                    <ll-card mediaPosition="left" border={true} class="ll-margin-lg-top">
                        {content}
                    </ll-card>

                    <ll-card mediaPosition="right" border={true} class="ll-margin-lg-top">
                        {content}
                    </ll-card>
                </div>
            </React.Fragment>
        );
    });
