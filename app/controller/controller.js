/**
 * Controller file for the app
 * author : Chemcee
 * Last modified : 15/02/2016 18:51
 */

exports.render = function (req, res) {
    res.render('index', {
        title: 'Chemcee M C - Home Page',
        description: 'Chemcee Cherian - Software Developer & Designer'
    });
}

exports.about = function (req, res) {
    res.render('about', {
        title: 'Chemcee M C - About Me',
        description: 'About me page'
    });
}
    
 exports.contact = function (req, res) {
     res.render('contact', {
        title: 'Chemcee M C - Connect with me ',
        description: 'Connect with me' 
     });
 }
 
 exports.project = function (req, res) {
     res.render('projects', {
         title: 'Chemcee M C - Projects ',
         description: 'Projects'
     })
 }
 
 exports.services = function (req, res) {
     res.render('services', {
         title: 'Chemcee M C - Services',
         description: 'Services and Skills'
     })
 }
