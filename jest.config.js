const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js)$': 'babel-jest',
  },
  transformIgnorePatterns: [
  ],
};

module.exports = config;