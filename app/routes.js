module.exports = function(app, passport) {
    app.get('/', function(req, res){
     res.render('index.ejs');
    });
   
    app.get('/login', function(req, res){
     res.render('login.ejs', {message:req.flash('loginMessage')});
    });
   
    app.post('/login', passport.authenticate('local-login', {
     successRedirect: '/inicio',
     failureRedirect: '/login',
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
   
    app.get('/login', function(req, res){
     res.render('login.ejs', {message: req.flash('signupMessage')});
    });
   
    app.post('/signup', passport.authenticate('local-signup', {
     successRedirect: '/menu',
     failureRedirect: '/login',
     failureFlash: true
    }));
   
   
   app.get('/menu', isLoggedIn, function(req, res){
       res.render('inicio.ejs', {
        user:req.user
       });
   });
   app.get('/inicio', function(req, res){
       res.render('inicio.ejs', {
        user:req.user
       });
   });
   app.get('/Regislocalizacion', function(req, res){
       res.render('inicio.ejs', {
        user:req.user
       });
   });
   
   //aqui se hace la consulta a la base de datos para mostrar las empresas
   var mysql = require('mysql');
   var dbconfig = require('../config/database');
   var bcrypt = require('bcrypt-nodejs');
   var connection = mysql.createConnection(dbconfig.connection);
   connection.query('USE ' + dbconfig.database);

   app.get('/profile', function (req, res) {
         connection.query("SELECT * FROM tbl_usuario", function (err, resul) {
             console.log(resul[0]);
             res.render('profile.ejs', {
                 usuarios: resul,
                 user: req.user
            });
         });
    });

    // CHAT COMIENZA

    app.get('/chat', function(req, res){
        res.render('chat.ejs', {
         user:req.user
        });
    });
   
    app.get("/usuarios", function(req,res){
        var conexion = mysql.createConnection(credenciales);
        conexion.query(
            "SELECT * FROM tbl_persona",
            [],
            function(error, data, fields){
                console.log(error);
                res.send(data);
                res.end();
                conexion.end();
            }
        );
    });

    app.get("/mensajes/:usuarioEmisor/:usuarioReceptor",function(req, res){
        var conexion = mysql.createConnection(credenciales);
        conexion.query(
            `select  a.codigo_usuario_emisor,
                    a.codigo_usuario_receptor,
                    a.mensaje, a.hora_mensaje,
                    b.nombre_usuario as nombre_usuario_emisor,
                    c.nombre_usuario as nombre_usuario_receptor
            from tbl_mensajes a
            inner join tbl_persona b
                on(a.codigo_usuario_emisor = b.cod_persona)
            inner join tbl_persona c
                on(a.codigo_usuario_receptor = c.cod_persona)
            where (codigo_usuario_emisor = ? and codigo_usuario_receptor = ?)
            or (codigo_usuario_emisor = ? and codigo_usuario_receptor = ?)
            order by codigo_mensaje;`,
            [
                req.params.usuarioEmisor,
                req.params.usuarioReceptor,
                req.params.usuarioReceptor,
                req.params.usuarioEmisor
            ],
            function(error, data, fields){
                res.send(data);
                res.end();
            }
        );
        
    });

    app.post("/enviar",function(req,res){
        var conexion = mysql.createConnection(credenciales);
        conexion.query(
            "INSERT INTO tbl_mensajes(codigo_usuario_emisor, codigo_usuario_receptor, mensaje, hora_mensaje) VALUES (?,?,?,?)",
            [
                req.body.emisor,
                req.body.receptor,
                req.body.mensaje,
                req.body.hora
            ],
            function(error, data, fields){
                if (error){
                    res.send(error);
                    res.end();
                }else{
                    res.send(data);
                    res.end();
                }
            }
        );
    });

    
  //Registro Usuario

  app.get('/registroUsuarios', function(req, res){
    res.render('registro-usuarios.ejs',{
        user:req.user
       });
    res.end();
    
});
   
   
   app.post("/guardar", function (req, res) {
       connection.query(`
           INSERT INTO tbl_persona (cod_genero,telefono, nombre_persona, apellido_persona) 
           VALUES (?,?,?,?)`,
           [req.body.genero,req.body.telefono, req.body.nombre, req.body.apellidos],
           function (error, data, fields) {
               res.send(data);
               res.end();
           }
       );
       
   });
   app.post("/guardarUsua", function (req, res) {
       console.log(req.body.id, req.body.password,req.body.email);
   
       connection.query(`
           INSERT INTO tbl_usuario (id, username, password) 
           VALUES (?,?,?)`,
           [req.body.id, req.body.email, bcrypt.hashSync(req.body.password, null, null)],
           function (error, data, fields) {
               res.send(data);
               //console.log(data);
               res.end();
           }
       );
       
   });
   
   
    app.get('/logout', function(req,res){
     req.logout();
     res.redirect('/login');
    })
   };
   
   
   
   function isLoggedIn(req, res, next){
    if(req.isAuthenticated())
     return next();
   
    res.redirect('/');
   }