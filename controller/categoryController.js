const { 
  findAllCategories, 
  createOneCategory, 
  updateOneCategory, 
  removeOneCategory 
} = require('../model/categoryModel');

const getAllCategories = async (req, res) => {
  try {
    const result = await findAllCategories();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const postOneCategory = async (req, res) => {
  try {
    const result = await createOneCategory(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const putOneCategory = async (req, res) => {
  try {
    const result = await updateOneCategory(req.params.catId, req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteOneCategory = async (req, res) => {
  try {
    const result = await removeOneCategory(req.params.catId);
    res.status(200).send('This category has been successfully removed');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { 
  getAllCategories, 
  postOneCategory, 
  putOneCategory, 
  deleteOneCategory 
};
