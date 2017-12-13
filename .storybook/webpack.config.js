module.exports = function(storybookBaseConfig, configType) {
  storybookBaseConfig.resolve.modules = [
    ...storybookBaseConfig.resolve.modules,
    '../src',
    '../node_modules',
  ];

  storybookBaseConfig.module.rules = [
    ...storybookBaseConfig.module.rules,
    {
      enforce: 'pre',
      test: /\.jsx?$/,
      use: 'eslint-loader?{emitWarning: false}',
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
        { loader: 'postcss-loader' }
      ],
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      exclude: /node_modules/,
      loader: 'file-loader?name=images/[name].[ext]',
    },
  ];

  return storybookBaseConfig;
};
