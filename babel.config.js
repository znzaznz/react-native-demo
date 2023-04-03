module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@/utils': './src/utils',
          '@/assets': './src/assets',
          '@/components': './src/components',
          '@/services': './src/services',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
