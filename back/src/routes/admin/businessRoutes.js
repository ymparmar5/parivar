const express = require('express');
const {
  getBusinesses,
  updateBusiness,
  deleteBusiness
} = require('../../controllers/adminController');
const { protect, requirePermission } = require('../../middleware/auth');
const { parseForm } = require('../../middleware/upload');

const router = express.Router();

router.get('/', protect, requirePermission('businesses.list'), getBusinesses);
router.put('/:id', protect, requirePermission('businesses.edit'), parseForm, updateBusiness);
router.delete('/:id', protect, requirePermission('businesses.delete'), deleteBusiness);

module.exports = router;
