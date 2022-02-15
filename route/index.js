const productRouter = require('./productRouter');
const categoryRouter = require('./categoryRouter');

const routes = (app) => {
  app.use('/products', productRouter);
  app.use('/categories', categoryRouter);
};

module.exports = { routes };
