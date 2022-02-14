const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const { router } = require('./route');

const SERVER_PORT = process.env.SERVER_PORT || 5000;

app.use(cors('*'));
app.use(express.json());
router(app);

const server = app.listen(SERVER_PORT, () => console.log(`🚀 Server is running on http://localhost:${SERVER_PORT}`));

module.exports = server;
