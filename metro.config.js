const path = require("path");
// const blacklist = require("metro-config/src/defaults/blacklist");

const projectRoot = __dirname;

module.exports = {
  resolver: {

    extraNodeModules: {
      "~": path.resolve(projectRoot, ".")

    }
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};


