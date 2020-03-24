module.exports = {
  // stories: ['../src/**/*.stories.[tj]s'],
  stories: ['../src/**/*.stories.([tj]s|mdx)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    // '@storybook/addon-notes/register',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y/register',
    '@storybook/addon-knobs',
    '@storybook/addon-docs'
  ]
};

