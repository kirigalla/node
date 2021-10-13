//metodo de express llamado router
const router = require('express').Router();

//router: me devuelve el objeto js y lo que hace puedo agregar rutas y puedo utilizar
const usuarioController = require('../controllers/usuarioController');

//colocamos las rutas del sevidor
router.get('/', usuarioController.list);
router.post('/add', usuarioController.save);
router.get('/update/:id', usuarioController.edit);
router.post('/update/:id', usuarioController.update);
router.get('/delete/:id', usuarioController.delete);

//exportamos el router
module.exports = router;