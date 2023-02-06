module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/(specs|tests)/**/*.(spec|test).(ts|js)'],
  testEnvironment: 'node',
  allowJs: true,
};