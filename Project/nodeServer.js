var express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
var results={} 

app.get('/', function (request, response) {
  var testNames = request.body.testSuites;
  var siteURL = request.body.siteURL;
  var testRegex = '**/?('+testNames+')\.(test|spec)\.[jt]s';
 	const testConfig = {
  	  testMatch: [ testRegex ]
  }
	runTest(testConfig, siteURL ).then(result => {
        JSON.stringify(results);
				response.send(results);
    });
});

var server = app.listen(8080, function () {
    console.log('Server Running at port 8080....... ');
});

async function runTest(testConfig, siteURL)
{
  var execute = require('./process-test.js');
  results =  await execute.executeTest(testConfig, siteURL);
}


