const { getProducts, getProduct, saveProduct, updateProduct, deleteProduct } = require('../controllers/products');
const {
  requireAuth,
  requireAdmin,
} = require('../middleware/auth');

module.exports = (app, nextMain) => {
  app.get('/products', requireAuth,getProducts);

  app.get('/products/:productId', requireAuth, getProduct);

  app.post('/products', requireAdmin, saveProduct);

  app.put('/products/:productId', requireAdmin, updateProduct);

  app.delete('/products/:productId', requireAdmin, deleteProduct);

  nextMain();
};