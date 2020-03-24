import { ButtonComponent } from './doc-button.component';

export default {
  title: 'DocButton',
  component: ButtonComponent,
  parameters: { docs: { iframeHeight: 300 } },
};

export const Baseline = () => ({
  component: ButtonComponent,
  props: {
    label: 'Docs Test',
  },
});
