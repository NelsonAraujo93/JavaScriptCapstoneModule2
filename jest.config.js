const config = {
  verbose: true,
  transform: {
    '^.+\\.(js)$': 'babel-jest',
  },
  transformIgnorePatterns: [
  ],
};

module.exports = config;