const { StylableWebpackPlugin } = require("@stylable/webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /\.st\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new StylableWebpackPlugin()],
};
