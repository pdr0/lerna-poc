const babelConfig = {
    rootMode: "upward"
};

module.exports = ({ config }) => {
    return {
        ...config,
        module: {
            ...config.module,
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    use: [
                        {
                            loader: require.resolve("awesome-typescript-loader"),
                            options: {
                                inlineSourceMap: false
                            }
                        }
                    ]
                }, {
                    test: /(\.jsx|\.js)$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: "babel-loader",
                    options: babelConfig
                }, {
                    test: /(?<!\.lit)\.scss$/,
                    use: [
                        "raw-loader",
                        "sass-loader"
                    ]
                }, {
                    test: /\.lit\.scss$/,
                    use: [
                        "@lotto/lit-css-loader",
                        "sass-loader"
                    ]
                }, {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        "css-loader"
                    ]
                }
            ]
        },
        resolve: {
            ...config.resolve,
            extensions: [...config.resolve.extensions, ".ts", ".tsx"]
        }
    };
};
