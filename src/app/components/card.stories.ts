import {action, withActions} from '@storybook/addon-actions';
import {CardComponent} from './card.component';

export default {
  title: 'Card',
  component: CardComponent,
  docs: { iframeHeight: 300 },
  parameters: {
    // knobs: {
    //   disableDebounce: true,
    // },
  },
};

export const Basic = () => {
  return {
    component: CardComponent,
    props: {
      title: 'Hello card!',
      subtitle: 'waiting to be clicked',
      btnClicked: action('👊 Button was clicked'),
    },

  };
};

Basic.story = {
  name: 'With Action',
};



// storiesOf('Card', module)
//   .add('empty', () => ({
//     component: CardComponent,
//     props: {}
//   }))
//   .add('with title', () => ({
//     component: CardComponent,
//     props: {
//       title: 'Hello card!'
//     }
//   }))
//   .add('with title and subtitle', () => ({
//     component: CardComponent,
//     props: {
//       title: 'Hello card!',
//       subtitle: 'Well hello there 👋'
//     }
//   }))
//   .add('with action', () => ({
//     component: CardComponent,
//     props: {
//       title: 'A card...',
//       subtitle: 'Waiting to be clicked-on',
//       btnClicked: action('👊 Button was clicked')
//     }
//   }));
//
// // let's nest a story into our main `Card` stories
// storiesOf('Card/nestezzd', module).add('special card', () => ({
//   component: CardComponent,
//   props: {
//     content: `I'm a card in a nested story!`
//   }
// }));
