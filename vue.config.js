module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/rest-countries/'
    : '/',
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
