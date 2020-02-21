exports.config = {
  tests: './*/*_test.js',
  output: './results',
  helpers: {
    REST: {
      endpoint: "https://swapi.co",
      defaultHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    },
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'TestCodeCept',
  translation: 'pt-BR',
  plugins: {
    retryFailedStep: {
      enabled: true
      }
  }
};