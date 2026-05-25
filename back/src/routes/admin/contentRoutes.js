const express = require('express');
const adminContent = require('../../controllers/adminContentController');
const { protect, requirePermission } = require('../../middleware/auth');
const { parseForm } = require('../../middleware/upload');

const router = express.Router();

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

module.exports = router;
