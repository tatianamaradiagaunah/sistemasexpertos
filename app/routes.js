module.exports = function(app, passport) {
    app.get('/', function(req, res){
     res.render('index.ejs');
    };

    function isLoggedIn(req, res, next){
        if(req.isAuthenticated())
         return next();
       
        res.redirect('/');
       }