const productRouter = require('./productRouter')

const router = (app) => {
  app.use('/products', productRouter);
};

module.exports = { router };
