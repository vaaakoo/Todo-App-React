module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        loader: "url-loader?limit=10240",
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
