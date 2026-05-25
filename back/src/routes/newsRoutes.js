const express = require('express');
const { protect } = require('../middleware/auth');
const { parseForm, postUpload } = require('../middleware/upload');
const {
  getNewsList,
  getNewsById,
  addNews,
  updateNews,
  deleteNews
} = require('../controllers/newsController');

const router = express.Router();

router.get('/', protect, getNewsList);
router.get('/:id', protect, getNewsById);
router.post('/', protect, postUpload, addNews);
router.put('/:id', protect, postUpload, updateNews);
router.delete('/:id', protect, deleteNews);

module.exports = router;