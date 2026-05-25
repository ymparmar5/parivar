const express = require('express');
const { protect, requirePermission } = require('../middleware/auth');
const { parseForm } = require('../middleware/upload');
const {
  login,
  getStats,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getBusinesses,
  updateBusiness,
  deleteBusiness,
  getPosts,
  savePost,
  deletePost,
  getConfig,
  updateConfig
} = require('../controllers/adminController');
const adminContent = require('../controllers/adminContentController');
const roleController = require('../controllers/roleController');

const router = express.Router();

// Auth endpoint
router.post('/login', parseForm, login);

// Dashboard statistics
router.get('/stats', protect, requirePermission('dashboard.view'), getStats);

// Users CRUD endpoints
router.get('/users', protect, requirePermission(['members.list', 'committee.list']), getUsers);
router.post('/users', protect, requirePermission(['members.add', 'committee.add']), parseForm, createUser);
router.put('/users/:id', protect, requirePermission(['members.edit', 'committee.edit']), parseForm, updateUser);
router.delete('/users/:id', protect, requirePermission(['members.delete', 'committee.delete']), deleteUser);

// Roles & permissions endpoints
router.get('/permissions', protect, requirePermission('roles.list'), roleController.getPermissionOptions);
router.get('/roles', protect, requirePermission('roles.list'), roleController.getRoles);
router.post('/roles', protect, requirePermission('roles.add'), parseForm, roleController.saveRole);
router.put('/roles/:id', protect, requirePermission('roles.edit'), parseForm, roleController.saveRole);
router.delete('/roles/:id', protect, requirePermission('roles.delete'), roleController.deleteRole);

// Businesses endpoints
router.get('/businesses', protect, requirePermission('businesses.list'), getBusinesses);
router.put('/businesses/:id', protect, requirePermission('businesses.edit'), parseForm, updateBusiness);
router.delete('/businesses/:id', protect, requirePermission('businesses.delete'), deleteBusiness);

// Feed Posts endpoints
router.get('/posts', protect, requirePermission('posts.list'), getPosts);
router.post('/posts', protect, requirePermission('posts.add'), parseForm, savePost);
router.put('/posts/:id', protect, requirePermission('posts.edit'), parseForm, savePost);
router.delete('/posts/:id', protect, requirePermission('posts.delete'), deletePost);

// Platform Configuration endpoints
router.get('/config', protect, requirePermission('settings.edit'), getConfig);
router.put('/config', protect, requirePermission('settings.edit'), parseForm, updateConfig);

// Admin content management endpoints
router.get('/festivals', protect, requirePermission('festivals.list'), adminContent.getFestivals);
router.post('/festivals', protect, requirePermission('festivals.add'), parseForm, adminContent.saveFestival);
router.put('/festivals/:id', protect, requirePermission('festivals.edit'), parseForm, adminContent.saveFestival);
router.delete('/festivals/:id', protect, requirePermission('festivals.delete'), adminContent.deleteFestival);

router.get('/events', protect, requirePermission('events.list'), adminContent.getEvents);
router.post('/events', protect, requirePermission('events.add'), parseForm, adminContent.saveEvent);
router.put('/events/:id', protect, requirePermission('events.edit'), parseForm, adminContent.saveEvent);
router.delete('/events/:id', protect, requirePermission('events.delete'), adminContent.deleteEvent);

router.get('/gallery', protect, requirePermission('gallery.list'), adminContent.getGallery);
router.post('/gallery', protect, requirePermission('gallery.add'), parseForm, adminContent.saveGallery);
router.put('/gallery/:id', protect, requirePermission('gallery.edit'), parseForm, adminContent.saveGallery);
router.delete('/gallery/:id', protect, requirePermission('gallery.delete'), adminContent.deleteGallery);

router.get('/banners', protect, requirePermission('banners.list'), adminContent.getBanners);
router.post('/banners', protect, requirePermission('banners.add'), parseForm, adminContent.saveBanner);
router.put('/banners/:id', protect, requirePermission('banners.edit'), parseForm, adminContent.saveBanner);
router.delete('/banners/:id', protect, requirePermission('banners.delete'), adminContent.deleteBanner);

router.get('/contact-inquiries', protect, requirePermission('contact-inquiries.list'), adminContent.getInquiries);
router.post('/contact-inquiries', protect, requirePermission('contact-inquiries.edit'), parseForm, adminContent.saveInquiry);
router.put('/contact-inquiries/:id', protect, requirePermission('contact-inquiries.edit'), parseForm, adminContent.saveInquiry);
router.delete('/contact-inquiries/:id', protect, requirePermission('contact-inquiries.delete'), adminContent.deleteInquiry);

const masterPermission = (action) => (req) => `${req.params.type === 'business' ? 'businesses' : req.params.type}.${action}`;
router.get('/masters/:type', protect, requirePermission(masterPermission('list')), adminContent.getMasters);
router.post('/masters/:type', protect, requirePermission(masterPermission('add')), parseForm, adminContent.saveMaster);
router.put('/masters/:type/:id', protect, requirePermission(masterPermission('edit')), parseForm, adminContent.saveMaster);
router.delete('/masters/:type/:id', protect, requirePermission(masterPermission('delete')), adminContent.deleteMaster);

module.exports = router;
