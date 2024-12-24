const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');
const exclusionList = require('metro-config/src/defaults/exclusionList');
const escape = require('escape-string-regexp');
const rootPath = path.resolve(__dirname, '..');

const exclude = ['react', 'react-native', '@babel/runtime'];

const extraNodeModules = {
   'react': path.resolve(__dirname + '/node_modules/react'),
   'react-native': path.resolve(__dirname + '/node_modules/react-native'),
   'react-native-iaphub': path.resolve(__dirname + '/node_modules/react-native-iaphub'),
   '@babel/runtime': path.resolve(__dirname + '/node_modules/@babel/runtime'),
   'react-native-iaphub-ui': path.resolve(__dirname + '/..'),
};

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
   watchFolders: [
      // Add the parent directory to watch
      path.resolve(__dirname, '..'),
   ],
   resolver: {
      blacklistRE: exclusionList(exclude.map((name) => new RegExp(`^${escape(path.join(rootPath, 'node_modules', name))}\\/.*$`))),
      extraNodeModules: extraNodeModules
   },
   transformer: {
      getTransformOptions: async () => ({
         transform: {
            experimentalImportSupport: false,
            inlineRequires: true,
         },
      }),
   },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
