import {addDecorator, configure} from '@storybook/react';
import {setDefaults} from '@storybook/addon-info';
import * as React from 'react';
import {setOptions} from '@storybook/addon-options';
import '@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce';

setOptions({
    name: 'styleguide',
    url: '#'
});

setDefaults({
    // Toggles display of header with component name and description
    header: false,
    // Displays info inline vs click button to view
    inline: false,
    // Displays the source of story Component
    source: true
});

addDecorator(story => <div className="ll-scoped-components" style={{padding: 20}}>{story()}</div>);

const req = require.context('../../src/main/', true, /\.stories\.js$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
    require('style-loader!../../src/stylesheets/storybook.scss');
    require('style-loader!../../src/stylesheets/main.scss');
}

configure(loadStories, module);
