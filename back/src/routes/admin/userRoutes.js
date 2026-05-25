const express = require('express');
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/adminController');
const { protect, requirePermission } = require('../../middleware/auth');
const { parseForm } = require('../../middleware/upload');

const router = express.Router();

router.get('/users', protect, requirePermission(['members.list', 'committee.list']), getUsers);
router.post('/users', protect, requirePermission(['members.add', 'committee.add']), parseForm, createUser);
router.put('/users/:id', protect, requirePermission(['members.edit', 'committee.edit']), parseForm, updateUser);
router.delete('/users/:id', protect, requirePermission(['members.delete', 'committee.delete']), deleteUser);

module.exports = router;
