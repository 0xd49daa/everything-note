const standard = require('@neutrinojs/standardjs');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');
const storybook = require('neutrino-preset-storybook-react')

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    process.env.NODE_ENV === 'development' ? standard() : false,
    react({
      html: {
        title: 'Everything Note - Skynet App'
      }
    }),
    storybook(),
    jest(),
  ],
};
