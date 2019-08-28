import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { text, withKnobs } from "@storybook/addon-knobs/react";
import "../../webComponents/typography/MarketingHeadline";
import "../../webComponents/typography/Typography";
import "../../webComponents/card/Card";
import "../../webComponents/syndicates/SyndicateHorizontalLayout";

storiesOf("Web Components/Syndicates/Syndicate Horizontal Layout", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add("default", () => {
        const title = text("Title", "Bolão Virtual - Como funciona?");
        const paragraph = text(
            "Paragraph",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur dignissimos eaque eos est et magnam nisi nostrum quae quas, quia saepe totam voluptatibus?"
        );

        return (
            <React.Fragment>
                <h2>Example with image on the top with text on left with layout of 3 columns</h2>
                <ll-syndicate-horizontal-layout>
                    <ll-card imagePosition="top" textAlign="left">
                        <img
                            slot="image"
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
                    </ll-card>

                    <ll-card imagePosition="top" textAlign="left">
                        <img
                            slot="image"
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
                    </ll-card>

                    <ll-card imagePosition="top" textAlign="left">
                        <img
                            slot="image"
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
                    </ll-card>
                </ll-syndicate-horizontal-layout>

                <br />
                <br />
                <h2>Example with image on the top with text on left with layout of 3 columns with border</h2>
                <ll-syndicate-horizontal-layout>
                    <ll-card imagePosition="top" textAlign="left" border={true}>
                        <img
                            slot="image"
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
                    </ll-card>

                    <ll-card imagePosition="top" textAlign="left" border={true}>
                        <img
                            slot="image"
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
                    </ll-card>

                    <ll-card imagePosition="top" textAlign="left" border={true}>
                        <img
                            slot="image"
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
                    </ll-card>
                </ll-syndicate-horizontal-layout>
            </React.Fragment>
        );
    });
