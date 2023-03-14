const { response } = require('express');
let { productos } = require('../data/productos');

const getProductos = async (req, res = response) => {
  return res.json({
    productos: productos,
    ok: true
  });
};

const addProducto = async (req, res = response) => {
  const { nombre } = req.body;
  productos.push({
    id: productos[productos.length - 1].id + 1,
    nombre: nombre
  });

  return res.json({
    ok: true
  });
};

const updateProducto = async (req, res = response) => {
  const id = req.params.id;
  const { nombre } = req.body;

  const producto = productos.find((x) => x.id === parseInt(id));
  producto.nombre = nombre;
  return res.json({
    ok: true
  });
};

const deleteProducto = async (req, res = response) => {
  const id = req.params.id;
  productos = productos.filter((x) => x.id !== parseInt(id));

  return res.json({
    ok: true
  });
};

module.exports = {
  getProductos,
  addProducto,
  updateProducto,
  deleteProducto
};
