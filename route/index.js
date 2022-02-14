const productRouter = require('./productRouter');
const categoryRouter = require('./categoryRouter');

const router = (app) => {
  app.use('/products', productRouter);
  app.use('/categories', categoryRouter);
};

module.exports = { router };
