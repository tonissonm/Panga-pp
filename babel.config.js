module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      '@babel/preset-react',
      '@babel/preset-typescript',
      'babel-preset-expo',
    ],
    plugins: ["nativewind/babel"],
  };
};
