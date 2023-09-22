module.exports = {
  extends: [
    'stylelint-config-standard',
    // "stylelint-config-standard-less",  // TODO: enable if using less and disable the scss config below
    'stylelint-config-standard-scss',
  ],
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  allowEmptyInput: true,
  rules: {},
};
