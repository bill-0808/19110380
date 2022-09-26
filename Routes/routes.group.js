const express = require('express');
const { getAllGroup } = require('../Controllers/controllers.groupController');
const router = express.Router();

// router.use((req, res, next) => {
//     next();
// })

router.get('/', getAllGroup);

module.exports = router