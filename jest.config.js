module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@tests/(.*)$': '<rootDir>/tests/$1',
  },
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
