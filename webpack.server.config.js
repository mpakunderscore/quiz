const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin")
const webpack = new require('webpack')
const PACKAGE = require("./package.json");
const {execSync} = require("child_process");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const nodeExternals = require('webpack-node-externals'); // You might need to install this package


const serverConfig = () => {

    // const mode = process.env.NODE_ENV || 'production' // development
    const mode = 'development'

    return {
        target: 'node', // Ensures compatibility with Node.js
        entry: './src/server.ts', // Your server file
        output: {
            path: path.resolve(__dirname, 'dist'), // Output directory
            filename: 'server.js' // Output file name
        },
        mode: mode,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        resolve: {
            fallback: {
                "fs": false,
                "tls": false,
                "net": false,
                "path": false,
                "zlib": false,
                "http": false,
                "https": false,
                "stream": false,
                "crypto": false,
            }
        },
        externals: {
            sequelize: 'commonjs sequelize',
            sqlite3: 'commonjs sqlite3',
        },
        // externals: [nodeExternals()], // This will treat node_modules as external
    }
}

module.exports = [serverConfig];
