import {action} from '@storybook/addon-actions';
import {CardComponent} from './card.component';

export default {
  title: 'Card',
  component: CardComponent,
  docs: { iframeHeight: 150 },
  parameters: {},
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



