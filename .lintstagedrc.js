module.exports = {
  './src/**/*.{js,jsx,ts,tsx}': ['eslint --quiet'],
  './src/**/*.{css,scss,less}': ['stylelint --quiet'],
  '**/*': ['prettier --write --ignore-unknown'],
};
