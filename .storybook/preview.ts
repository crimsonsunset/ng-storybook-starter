import { configure, addDecorator, addParameters } from '@storybook/angular';
import {withA11y} from '@storybook/addon-a11y';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import {withKnobs} from '@storybook/addon-knobs';
setCompodocJson(docJson);

addDecorator(withA11y);
addDecorator(withKnobs);

addParameters({
  knobs: {
    disableDebounce: true,
  },
  a11y: {
    // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    config: {},
    // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    options: {
      runOnly: {
        type: 'tag',
        values: ['wcag2a'],
        // values: ['wcag2a', 'wcag2aa']
      }
    },
  },
});

