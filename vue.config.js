module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "./src/styles/reset.scss";
            @import "./src/styles/_variables.scss";
          `,
      },
    },
  },
};
