//framawork express
const express = require('express'),
//usaremos path para unir directorios
      path = require('path'),
//usaremos morgan para los middlewares
      morgan = require('morgan'),
//requerimos el modulo de mysql
      mysql = require('mysql'),
      myConnection = require('express-myconnection');
//inicializamos el framework
const app = express();

//importando rutas
const usuarioRoutes = require('./routes/usuario');


//settings para configurar express
app.set('port', process.env.PORT || 3000);
//en donde esta a carpeta views
app.set('views', path.join(__dirname, '/views'));
//configurar las vistas de la aplicacion (motor de plantillas)
app.set('view engine', 'ejs');

//configurar los middlewares se ejecutan antes de que vengan las peticiones del cliente
//vamos registrar las peticiones que llegan antes de procesarlas
app.use(morgan('dev'));

//conectar a mysql
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: 'nuotatore2029',
  port: 3306,
  database: 'basecrud'
}, 'single'));
app.use(express.urlencoded({extended: false}));

//todas rutas las  todas las url que el usuario pida
app.use('/', usuarioRoutes);

//archivos estaticos complemento para imagenes o css, etc
app.use(express.static(path.join(__dirname, '/public')));

//inicializamos un servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor escuchando desde el puerto  ${app.get('port')}`);
});