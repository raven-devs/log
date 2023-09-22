/**
 * Message format: type(scope?): subject, i.e.: 'feat(crud): New CRUD methods. New user ACL validator.'
 * Message format for a (ticket) reference: type(scope?): subject (#reference), i.e.: 'feat: New CRUD methods. New user ACL validator. (#PROJA-985)'
 * Message format for a breaking change: type(scope?)!: subject, i.e.: 'feat(api)!: Drop support of Node v.12.x.x'
 * Message format for a breaking change with a footer:
 * 'feat(api)!: Support of Node v.14

BREAKING CHANGE: Starting from this release we support Node v.14.'
 * 
 */

module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'header-max-length': [0, 'always'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'revert',
        'ci',
        'build',
        'perf',
        'chore',
        'breaking',
        'other',
      ],
    ],
    'scope-case': [0, 'always'],
    'subject-exclamation-mark': [0, 'never'],
    'subject-case': [0, 'always'],
    'subject-full-stop': [0, 'always'],
    'references-empty': [0, 'never'], // set [2, 'never'] to enable reference validation
  },
  parserPreset: {
    parserOpts: {
      // issuePrefixes: ['PROJA-', 'PROJB-'], // required reference prefixes, uncomment when reference validation enabled
    },
  },
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};
