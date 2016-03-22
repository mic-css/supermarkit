exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/e2e/*Spec.js'],
  baseUrl: 'http://localhost:9001' //default test port with Yeoman
};
