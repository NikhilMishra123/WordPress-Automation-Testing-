async function executeTest(testConfig, siteURL) {
  process.env.BABEL_ENV = 'test';
  process.env.NODE_ENV = 'test';
  process.on( 'unhandledRejection', ( err ) => {
    throw err;
  } );
  const jest = require('jest');
  const {
    fromConfigRoot,
    getArgFromCLI,
    getArgsFromCLI,
    hasArgInCLI,
    hasProjectFile,
    hasJestConfig,
	} = require( './node_modules/@wordpress/scripts/utils' );
  if ( ! hasProjectFile( 'jest-puppeteer.config.js' ) && ! process.env.JEST_PUPPETEER_CONFIG ) {
    process.env.JEST_PUPPETEER_CONFIG = fromConfigRoot( 'puppeteer.config.js' );
  }
  process.env.PUPPETEER_HEADLESS = 'false';
  process.env.PUPPETEER_SLOWMO =  '--puppeteer-slowmo' ;
  const configsMapping = {
    WP_BASE_URL: '--wordpress-base-url',
    WP_USERNAME: '--wordpress-username',
    WP_PASSWORD: '--wordpress-password',
  };
	Object.entries( configsMapping ).forEach( ( [ envKey, argName ] ) => {
		if ( envKey.localeCompare('WP_BASE_URL')==0 ) {
		      process.env[ envKey ] = siteURL;
    }
	});
	const allConfig = require('./all-e2e.config.js')
  const jestConfig = {
      ...allConfig ,
		  ...testConfig
	}
	var pathToProject = __dirname;
  const projectRootPath = [ pathToProject ]
  const result =  await jest.runCLI(jestConfig , projectRootPath);
  const testResultsMetaData  = result.results.testResults;
  var testFileExtension = ".test.js"
	var extensionLength = testFileExtension.length
	var results ={}
	testResultsMetaData.forEach( ( testResults ) => {
		var testResult = testResults.numPassingTests ? 'Passed' : 'Failed';
    var testFilePath = testResults.testFilePath  ;
    var fileNameAt = testFilePath.lastIndexOf("/")+1;
    var fileName = testFilePath.substring(fileNameAt,testFilePath.length-extensionLength);
    results[fileName] =  testResult ;

  });
	return results
}

module.exports.executeTest = executeTest;
