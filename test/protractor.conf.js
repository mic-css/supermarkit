exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/*Feature.js'],
  baseUrl: 'http://localhost:9001'
};
