const path = require('path');

module.exports = {
  entry: {
	'Home' : './javascript/Home.js',
	'projectinfo' : './javascript/projectinfo.js',
	'createproject' : './javascript/createproject.js',
	'Page4' : './javascript/Page4.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};