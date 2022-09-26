const { mygroup } = require('../Models/models.group');

function getAllGroup(req, res) {
    res.status(200).json(mygroup);
}

module.exports = {
    getAllGroup
}