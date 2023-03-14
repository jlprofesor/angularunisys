const { response } = require('express');
const { generarJWT } = require('../helpers/jwt');

const login = async (req, res = response) => {
  const { user, password } = req.body;

  if (user !== 'admin' || password !== 'admin') {
    return res.status(400).json({
      ok: false,
      msg: 'Credenciales incorrectas'
    });
  }

  const token = await generarJWT(user);

  return res.json({
    ok: true,
    token: token
  });
};

module.exports = {
  login
};
