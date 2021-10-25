module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
  env: {
    development: {
      plugins: [
        'react-refresh/babel',
        [
          'babel-plugin-styled-components',
          {
            ssr: false,
          },
        ],
      ],
    },
    production: {
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            ssr: false,
            pure: true,
            displayName: false,
          },
        ],
      ],
    },
  },
}
