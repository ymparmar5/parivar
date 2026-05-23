const express = require('express');
const { protect } = require('../middleware/auth');
const { parseForm } = require('../middleware/upload');
const {
  getNewsList,
  getNewsById,
  addNews,
  updateNews,
  deleteNews
} = require('../controllers/newsController');

const router = express.Router();

router.get('/news_list', protect, getNewsList);
router.get('/news/:id', protect, getNewsById);
router.post('/news', protect, parseForm, addNews);
router.put('/news/:id', protect, parseForm, updateNews);
router.delete('/news/:id', protect, deleteNews);

module.exports = router;