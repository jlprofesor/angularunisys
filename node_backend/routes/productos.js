const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getProductos, addProducto, updateProducto, deleteProducto } = require('../controllers/productos');

const router = Router();

// router.get('/', validarJWT, getProductos);
// router.post('/', validarJWT, addProducto);
// router.put('/:id', validarJWT, updateProducto);
// router.delete('/:id', validarJWT, deleteProducto);

router.get('/', getProductos);
router.post('/', addProducto);
router.put('/:id', updateProducto);
router.delete('/:id', deleteProducto);

module.exports = router;
