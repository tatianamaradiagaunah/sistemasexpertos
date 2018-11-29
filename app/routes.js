module.exports = function(app, passport) {
    app.get('/', function(req, res){
     res.render('index.ejs');
    });
             
              /* INICIAR SESION*/
    app.get('/sesion_inicio', function(req, res){
        res.render('sesion_inicio.ejs', {message: req.flash('signupMessage')});
    });

    app.post('/sesion_inicio', passport.authenticate('local-login', {
        successRedirect: '/inicio',
        failureRedirect: '/sesion_inicio',
        failureFlash: true
       }),
        function(req, res){
         if(req.body.remember){
          req.session.cookie.maxAge = 1000 * 60 * 3;
         }else{
          req.session.cookie.expires = false;
         }
         res.redirect('/');
        });

    app.get('/sesion_inicio', function(req, res){
       res.render('sesion_inicio.ejs', {message: req.flash('signupMessage')});
    });

    app.get('/inicio', function(req, res){
        res.render('inicio.ejs', {message: req.flash('signupMessage')});
     });

                   /* REGISTRARSE*/

     app.get('/registro-usuarios', function(req, res){
        res.render('registro-usuarios.ejs',{
            user:req.user
           });
        res.end();
        
    });

    app.post("/guardar", function (req, res) {
        connection.query(`
            INSERT INTO persona ( cod_genero, telefono, nombre_persona, apellido_persona) 
            VALUES (?,?,?,?)`,
            [ req.body.genero, req.body.telefono,req.body.nombre, req.body.apellido],
            function (error, data, fields) {
                res.send(data);
                res.end();
            }
        );
        
    });

    app.post("/guardarUsua", function (req, res) {
        console.log(req.body.id, req.body.password,req.body.email);
    
        connection.query(`
            INSERT INTO usuario (id, username, password) 
            VALUES (?,?,?)`,
            [req.body.id, req.body.email, bcrypt.hashSync(req.body.password, null, null)],
            function (error, data, fields) {
                res.send(data);
                //console.log(data);
                res.end();
            }
        );
        
    });
};

    function isLoggedIn(req, res, next){
        if(req.isAuthenticated())
         return next();
       
        res.redirect('/');
       }