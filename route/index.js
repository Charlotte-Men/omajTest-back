const brandRouter = require('./brandRouter');
const categoryRouter = require('./categoryRouter');
const colorRouter = require('./colorRouter');
const productRouter = require('./productRouter');
const sizeRouter = require('./sizeRouter');

const routes = (app) => {
  app.use('/brands', brandRouter);
  app.use('/categories', categoryRouter);
  app.use('/colors', colorRouter);
  app.use('/products', productRouter);
  app.use('/sizes', sizeRouter);
};

module.exports = { routes };
