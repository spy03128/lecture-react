const path = require("path"); //node에서 제공하는 경로를 쉽게 조작할 수 있도록 해주는 기능
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "numberbaseball-setting", //임의로 설정
  mode: "development", //배포할때는 여기를 production으로 변경
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },

  //입력 - client.jsx  NumberBaseball.jsx
  entry: {
    app: ["./client"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/, //정규표현식
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR", "last 2 chrome versions"], //목록 볼 수 있는 사이트 borwserslist
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],
  //출력 - app.js
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"),
    // publicPath: "/dist",
  },
  devServer: {
    publicPath: "/dist/", //가상경로 express.static(__dirname,'dist') 과 비슷
    hot: true,
  },
};
