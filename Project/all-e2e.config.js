const path = require( 'path' );
const { hasBabelConfig } = require( './node_modules/@wordpress/scripts/utils' )

const jestE2EConfig = {
	
		preset: 'jest-puppeteer',
 		testPathIgnorePatterns: [ '/node_modules/', '/wordpress/' ],
		reporters:
    'TRAVIS' in process.env && 'CI' in process.env ?
      [
        '@wordpress/jest-preset-default/scripts/travis-fold-passes-reporter.js',
      ] :
      undefined,
		_: [],
		setupFilesAfterEnv: ['<rootDir>/config/bootstrap.js',],
    version: undefined,
    v: undefined,
    all: undefined,
    automock: undefined,
    bail: undefined,
    b: undefined,
    browser: undefined,
    cache: undefined,
    changedFilesWithAncestor: undefined,
    ci: false,
    clearCache: undefined,
    clearMocks: undefined,
    collectCoverage: undefined,
    color: undefined,
    colors: undefined,
    coverage: undefined,
    debug: undefined,
    detectLeaks: false,
    detectOpenHandles: false,
    errorOnDeprecated: false,
    expand: undefined,
    e: undefined,
    findRelatedTests: undefined,
    forceExit: undefined,
    json: undefined,
    lastCommit: undefined,
    listTests: false,
    logHeapUsage: undefined,
    mapCoverage: undefined,
    noStackTrace: undefined,
    notify: undefined,
    onlyChanged: undefined,
    o: undefined,
    onlyFailures: undefined,
    f: undefined,
    passWithNoTests: false,
    resetMocks: undefined,
    resetModules: undefined,
    restoreMocks: undefined,
    runInBand: true,
    i: true,
    runTestsByPath: false,
    showConfig: undefined,
    silent: undefined,
    skipFilter: undefined,
    testLocationInResults: false,
    updateSnapshot: undefined,
    u: undefined,
    useStderr: undefined,
    verbose: undefined,
    watch: undefined,
    watchAll: undefined,
		watchman: undefined,		
		config: 'tests/e2e/all-e2e.config.js',
		c: 'tests/e2e/all-e2e.config.js',
    filter: undefined,
    maxConcurrency: 5,
    notifyMode: 'failure-change',
		prettierPath: undefined,
		'$0': 'process-test.js'	
  }

if ( ! hasBabelConfig() ) {
  jestE2EConfig.transform = {
    '^.+\\.[jt]sx?$': path.join( __dirname,'node_modules/@wordpress/scripts/config/babel-transform'),
  };
}
module.exports = jestE2EConfig;

