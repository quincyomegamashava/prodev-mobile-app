module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // plugins: ["nativewind/babel"], // ✅ must be an array of strings or arrays
  };
};
