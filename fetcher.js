const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const path = process.argv[3];

request (url, function (error, response, body) {

  if (error) {
    return console.log(error); 
  }

  // console.log(response && response.statusCode);
  // console.log(body);

  fs.writeFile(path, body, "utf8", () => {
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`)
  });
});