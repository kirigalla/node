//exportar un objeto para utilizar muchos metodos
const controller = {};

//consulta en la base
controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM usuario', (err, usuarios) => {
     if (err) {
      res.json(err);
     }
     res.render('usuarios', {
        data: usuarios
     });
    });
  });
};

//guardar en la base de datos
controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO usuario set ?', data, (err, usuario) => {
      console.log(usuario)
      res.redirect('/');
    })
  })
};

//editar datos de la base
controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM usuario WHERE id = ?", [id], (err, rows) => {
      res.render('usuarios_edit', {
        data: rows[0]
      })
    });
  });
};

//actualizar cambios
controller.update = (req, res) => {
  const { id } = req.params;
  const newUsuario = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE usuario set ? where id = ?', [newUsuario, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

//eliminar datos de la base de datos
controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM usuario WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;