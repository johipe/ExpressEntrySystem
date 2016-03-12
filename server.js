 var express = require('./config/express');
 var app = express();
 
 app.listen(3001);
 module.exports = app;
 console.log('running at localhost:3001'); 