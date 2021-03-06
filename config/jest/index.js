module.exports = {
  verbose: true,
  setupFiles: ['<rootDir>/config/jest/setup.js'],
  globalSetup: '<rootDir>/config/jest/globalSetup.js',
  globalTeardown: '<rootDir>/config/jest/globalTeardown.js',
  testEnvironment: '<rootDir>/config/jest/testEnvironment.js',
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@lib$': '<rootDir>/src/lib/index.ts',
    '^@core$': '<rootDir>/src/core/index.ts',
    '^@engine$': '<rootDir>/src/engine/index.ts',
    '^@exchange$': '<rootDir>/src/exchange/index.ts',
    '^@strategy$': '<rootDir>/src/strategy/index.ts',
    '^@store$': '<rootDir>/src/store/index.ts',
    '^@m8bTypes$': '<rootDir>/src/types/index.ts',
    '^@util$': '<rootDir>/src/util/index.ts',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
    },
  },
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules', '/config'],
}
