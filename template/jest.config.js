module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@test': '<rootDir>/src/test-helpers/index',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@prodivers/(.*)$': '<rootDir>/src/providers/$1',
    '^@config/(.*)$': '<rootDir>/src/configurations/$1',
    '^@reducers/(.*)$': '<rootDir>/src/redux/reducers/$1',
    '^@sagas/(.*)$': '<rootDir>/src/redux/sagas/$1',
    '^@styles/(.*)$': '<rootDir>/src/common-styles/$1',
  },
};
