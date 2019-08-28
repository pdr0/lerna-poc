import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import DatePickerPresets from "./DatePickerPresets";

storiesOf("DatePickerPresets", module)
    .add(
        "default",
        withInfo("Basic DatePickerPresets")(() => <DatePickerPresets onPresetClick={action("clicked preset")} />)
    )
    .add(
        "active",
        withInfo("DatePickerPresets with active preset")(() => (
            <DatePickerPresets activeId={2} onPresetClick={action("clicked preset")} />
        ))
    );
