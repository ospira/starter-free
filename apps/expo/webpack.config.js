const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env) {
  const config = await createExpoWebpackConfigAsync(env);
  // Customize the config before returning it.
  config.mode = 'development'
  return config;
};
