const { findAllCategories, createOne, updateOne, removeOne } = require('../model/categoryModel');

const getAllCategories = async (req, res) => {
  try {
    const result = await findAllCategories();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const postOne = async (req, res) => {
  try {
    const result = await createOne(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const putOne = async (req, res) => {
  try {
    const result = await updateOne(req.params.catId, req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteOne = async (req, res) => {
  try {
    const result = await removeOne(req.params.catId);
    res.status(200).send('This category has been successfully removed');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { getAllCategories, postOne, putOne, deleteOne };
