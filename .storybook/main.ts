
module.exports = {
  stories: ['../src/**/*.stories.([tj]s|mdx)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y/register',
    '@storybook/addon-viewport',
    '@storybook/addon-knobs',
    '@storybook/addon-docs'
  ]
};

