export default {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '(\\.|/)(stories)\\.ts[x]?$',
    '/.jest/',
    '/.storybook/',
    '/.mock.ts/'
  ],
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules', 'src'],
  preset: 'ts-jest/presets/js-with-babel',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  testRegex: ['(\\.|/)(spec)\\.ts[x]?$'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy'
  }
}
