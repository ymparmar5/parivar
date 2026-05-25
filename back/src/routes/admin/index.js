const express = require('express');

const router = express.Router();

router.use('/auth', require('./authRoutes'));
router.use('/dashboard', require('./dashboardRoutes'));
router.use('/users', require('./userRoutes'));
router.use('/roles', require('./roleRoutes'));
router.use('/businesses', require('./businessRoutes'));
router.use('/posts', require('./postRoutes'));
router.use('/config', require('./configRoutes'));
router.use('/content', require('./contentRoutes'));
router.use('/masters', require('./masterRoutes'));
router.use('/news', require('./newsRoutes'));

module.exports = router;
