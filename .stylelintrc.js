module.exports = {
  extends: 'stylelint-config-standard',
  ignoreFiles: ['**/*.d.ts'],
  rules: {
    'value-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
  },
}
