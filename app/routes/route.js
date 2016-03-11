module.exports = function (app) {
    var index = require('../controller/controller.js'); //requesting the controller js
    app.get('/', index.render);
    app.get('/about', index.about);
    app.get('/contact', index.contact);
    app.get('/projects',index.project);
    app.get('/services',index.services);
    app.post('/submit', index.contact ,function (req, res) {
        //code to connect with developer. to be written later
    });
}