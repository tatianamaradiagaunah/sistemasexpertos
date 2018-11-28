module.exports = function(app, passport) {
    app.get('/', function(req, res){
     res.render('index.ejs');
    });

    app.get('/registro', function(req, res){
        res.render('registro.ejs', {message: req.flash('signupMessage')});
    });

    app.get('/sesion_inicio', function(req, res){
       res.render('sesion_inicio.ejs', {message: req.flash('signupMessage')});
    });
};

    function isLoggedIn(req, res, next){
        if(req.isAuthenticated())
         return next();
       
        res.redirect('/');
       }