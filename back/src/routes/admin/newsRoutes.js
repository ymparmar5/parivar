const express = require('express');
const {
  getNewsList,
  addNews,
  updateNews,
  deleteNews
} = require('../../controllers/newsController');
const { protect, requirePermission } = require('../../middleware/auth');
const { postUpload } = require('../../middleware/upload');

const router = express.Router();

router.get('/news', protect, requirePermission('news.list'), getNewsList);
router.post('/news', protect, requirePermission('news.add'), postUpload, addNews);
router.put('/news/:id', protect, requirePermission('news.edit'), postUpload, updateNews);
router.delete('/news/:id', protect, requirePermission('news.delete'), deleteNews);

module.exports = router;
