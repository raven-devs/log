module.exports = {
  preset: 'ts-jest',
  rootDir: './src',
  testEnvironment: 'node',
  coverageDirectory: '../coverage',
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}'],
  coverageReporters: ['html'],
  errorOnDeprecated: true,
  verbose: false,
};
