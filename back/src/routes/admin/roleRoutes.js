const express = require('express');
const roleController = require('../../controllers/roleController');
const { protect, requirePermission } = require('../../middleware/auth');
const { parseForm } = require('../../middleware/upload');

const router = express.Router();

router.get('/permissions', protect, requirePermission('roles.list'), roleController.getPermissionOptions);
router.get('/roles', protect, requirePermission('roles.list'), roleController.getRoles);
router.post('/roles', protect, requirePermission('roles.add'), parseForm, roleController.saveRole);
router.put('/roles/:id', protect, requirePermission('roles.edit'), parseForm, roleController.saveRole);
router.delete('/roles/:id', protect, requirePermission('roles.delete'), roleController.deleteRole);

module.exports = router;
