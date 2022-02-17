const { 
  findProducts,
  createOneProduct,
  updateOneProduct,
  removeOneProduct
 } = require('../model/productModel')

const getProducts = async (req, res) => {
  try {
    let size_req=[];
    let size = []
    let category_req=[];
    let category =[];
    let color_req=[];
    let color =[];
    let brand_req=[];
    let brand =[];
    if (req.query.size_id) {
      req.query.size_id.lenght!== NaN ? size = [req.query.size_id] : size = req.query.size_id ;
      size_req = size.map(x => parseInt(x));
    }
    if (req.query.category_id) {
      req.query.category_id.length!== NaN ? category = [req.query.category_id] : category = req.query.category_id;
      category_req = category.map(x => parseInt(x));
    }
    if (req.query.color_id) {
      req.query.color_id.length!== NaN ? color = [req.query.color_id] : color = req.query.color_id;
      color_req = color.map(x => parseInt(x));
    }
    if (req.query.brand_id) {
      req.query.brand_id.length!== NaN ? brand = [req.query.brand_id] : brand = req.query.brand_id;
      brand_req = brand.map((x) => parseInt(x));
    }
    const result = await findProducts(color_req, brand_req, size_req, category_req);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(`internal server error : ${err.message}`);
  }
};

const postOneProduct = async (req, res) => {
  try {
    const result = await createOneProduct(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const putOneProduct = async (req, res) => {
  try {
    const result = await updateOneProduct(req.params.pdtId, req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteOneProduct = async (req, res) => {
  try {
    const result = await removeOneProduct(req.params.pdtId);
    res.status(200).send('This product has been successfully removed');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { 
  getProducts,
  postOneProduct,
  putOneProduct,
  deleteOneProduct
 };
