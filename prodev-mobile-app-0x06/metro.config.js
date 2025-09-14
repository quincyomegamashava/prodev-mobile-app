// const { getDefaultConfig } = require("expo/metro-config");

// const config = getDefaultConfig(__dirname, {
//   isCSSEnabled: true,
// });

// module.exports = config;

const { getDefaultConfig } = require("expo/metro-config");

const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './styles/global.css' })
