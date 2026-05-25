const express = require('express');
const { login } = require('../../controllers/adminController');
const { parseForm } = require('../../middleware/upload');

const router = express.Router();

router.post('/login', parseForm, login);

module.exports = router;
