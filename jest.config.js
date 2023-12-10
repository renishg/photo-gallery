module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest/setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest/setup-after-env.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native-community|@react-native|react-native|@react-navigation|redux-flipper|@realm/react|react-redux))',
  ],
  testRegex: '/__tests__/.+\\.test\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^src(\\/?.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: ['**/*.tsx', '**/*.ts'],
};
