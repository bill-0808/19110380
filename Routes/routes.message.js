const express = require('express');
const { getMessageGroupMember, getAllMessageGroupMember } = require('../Controllers/controllers.messageController');
const router = express.Router();

// router.use((req, res, next) => {
//     next();
// })

router.get('/:id', getMessageGroupMember);
router.get('/', getAllMessageGroupMember);

module.exports = router

