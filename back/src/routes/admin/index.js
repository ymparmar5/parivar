const express = require('express');

const router = express.Router();

router.use(require('./authRoutes'));
router.use(require('./dashboardRoutes'));
router.use(require('./userRoutes'));
router.use(require('./roleRoutes'));
router.use(require('./businessRoutes'));
router.use(require('./postRoutes'));
router.use(require('./configRoutes'));
router.use(require('./contentRoutes'));
router.use(require('./masterRoutes'));
router.use(require('./newsRoutes'));

module.exports = router;
