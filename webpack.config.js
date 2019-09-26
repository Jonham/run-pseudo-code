const path = require('path');

module.exports = {
  entry: './build.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'RunPseudoCode.bundle.js'
  }
};
