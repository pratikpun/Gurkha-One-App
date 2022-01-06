module.exports = {
  bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  semi: true,
  'prettier/prettier': [
    'error',
    {},
    {
      fileInfoOptions: {
        withNodeModules: true,
      },
      endOfLine: 'auto',
    },
  ],
};
