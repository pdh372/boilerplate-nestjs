module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat', // new feature
                'fix', // fix bug
                'improve', // improve your code
                'refactor', // refactor code
                'docs', // add info into document
                'chore', // change a bit
                'test', // test case
                'revert', // revert to last commit
                'ci', // update ci
                'build', // build source
            ],
        ],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'scope-empty': [2, 'never'],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'header-max-length': [2, 'always', 72],
    },
};
