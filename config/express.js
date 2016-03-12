/**
 * express config file for the application
 * author : Chemcee
 * Last modified : 15/02/2016 18:51
 */

var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

module.exports = function () {
    var app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(express.static('./public'));    
    
    /**
     * setting the view template folders
     * and the template engine - ejs
     */
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    require('../app/routes/route.js')(app);
    return app;
}