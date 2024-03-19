// acquire the third party module - request
const request = require('request');

request('http://127.0.0.1:5500/Node/Day%20I/04Thirdparty_Modules/just.html', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});