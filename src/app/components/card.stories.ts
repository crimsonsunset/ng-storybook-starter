import {action} from '@storybook/addon-actions';
import {CardComponent} from './card.component';
// import { CRMButtonComponent } from '@components/crm-button/crm-button.component';
import { moduleMetadata } from '@storybook/angular';
import {MatButtonModule} from '@angular/material/button';

export default {
  title: 'Card',
  component: CardComponent,
  docs: { iframeHeight: 150 },
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      imports: [
        MatButtonModule,
      ]
    }),
  ]
};

export const Baseline = () => {
  return {
    component: CardComponent,
    props: {
      title: 'Baseline',
    },
  };
};

export const WithSubtitle = () => {
  return {
    component: CardComponent,
    props: {
      title: 'Wow a title',
      subtitle: 'Subtitle',
    },

  };
};

export const WithAction = () => {
  return {
    component: CardComponent,
    props: {
      title: 'Hello card!',
      subtitle: 'waiting to be clicked',
      btnClicked: action('👊 Button was clicked'),
    },

  };
};



