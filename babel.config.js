module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        [
          "module-resolver",
          {
            root: ["./"],
            alias: {
              "@components": "./components",
              "@screens": "./screens",
              "@services": "./services",
              "@contexts": "./contexts",
              "@utils": "./utils",
              "@i18n": "./i18n",
              "@assets": "./assets",
            }
          }
        ]
      ]
    };
  };
  