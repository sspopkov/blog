const path = require('path');

// craco.config.js
module.exports = {
  webpack: {
    alias: {
      '@shared': path.resolve(__dirname, '../shared-components/src/components'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
};
