module.exports = [
    {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
    },
    {
        test: /\.sass$/,
        loaders: ["style", "css", "sass?indentedSyntax"]
    },
    {
        test: /\.css$/,
        loader: 'style!css!postcss'
    },
    {
        test: /\.scss$/,
        loaders: ["style", "css", "sass?indentedSyntax"]
    },
    {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw'
    },
];
