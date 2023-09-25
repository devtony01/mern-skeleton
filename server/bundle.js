import webpack from 'webpack';
import webpackConfig from './../webpack.config.client.js';

const compile = (app) => {
    if (process.env.NODE_ENV === 'development') {
        var compiler = webpack(webpackConfig);
        app.use(require("webpack-dev-middleware")(compiler, {
            publicPath: webpackConfig.output.publicPath,
            stats: {
                colors: true
            } 
        }));
        app.use(require("webpack-hot-middleware")(compiler));
    }
}

export default {
    compile
}