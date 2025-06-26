module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Nueva funcionalidad
        'fix',      // Bug fix
        'docs',     // Documentación
        'style',    // Formato, sin cambios de código
        'refactor', // Refactoring
        'test',     // Tests
        'chore',    // Mantenimiento
        'ci',       // CI/CD
        'perf',     // Performance
        'revert',   // Revert
        'build'     // Build system
      ]
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
    'body-max-line-length': [2, 'always', 100]
  }
};