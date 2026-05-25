const express = require('express');
const {
  getBusinesses,
  updateBusiness,
  deleteBusiness
} = require('../../controllers/adminController');
const { protect, requirePermission } = require('../../middleware/auth');
const { parseForm } = require('../../middleware/upload');

const router = express.Router();

router.get('/businesses', protect, requirePermission('businesses.list'), getBusinesses);
router.put('/businesses/:id', protect, requirePermission('businesses.edit'), parseForm, updateBusiness);
router.delete('/businesses/:id', protect, requirePermission('businesses.delete'), deleteBusiness);

module.exports = router;
