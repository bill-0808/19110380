const express = require('express');
const { getGroupMember, addNewMember } = require('../Controllers/controllers.19110380Controller');
const { getAllGroup } = require('../Controllers/controllers.groupController')
const router = express.Router();

// router.use((req, res, next) => {
//     next();
// })

router.get('/:id', getGroupMember);
router.get('/', getAllGroup);
router.post('/', addNewMember);

module.exports = router