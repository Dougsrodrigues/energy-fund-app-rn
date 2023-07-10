module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "@babel/preset-env"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            ["@"]: "./src",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
