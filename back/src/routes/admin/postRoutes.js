const express = require('express');
const {
  getPosts,
  savePost,
  deletePost
} = require('../../controllers/adminController');
const { protect, requirePermission } = require('../../middleware/auth');
const { parseForm } = require('../../middleware/upload');

const router = express.Router();

router.get('/posts', protect, requirePermission('posts.list'), getPosts);
router.post('/posts', protect, requirePermission('posts.add'), parseForm, savePost);
router.put('/posts/:id', protect, requirePermission('posts.edit'), parseForm, savePost);
router.delete('/posts/:id', protect, requirePermission('posts.delete'), deletePost);

module.exports = router;
