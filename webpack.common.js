"use strict";

const path = require("path");

module.exports =  {
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                sideEffects: false,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader?exportAsEs6Default"
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.ts', '.js', '.scss', '.html' ]
    },
    output: {
        path: path.join(__dirname, "docs")
    }
}