const { mygroup } = require('../Models/models.group');

function getMessageGroupMember(req, res) {
    const id = Number(req.params.id);
    for (let i = 0; i < mygroup.length; i++) {
        if (mygroup[i].id == id) {
            res.send('<html><body><ul><li>' + mygroup[i].name + '</li></ul></body></html>');
            return;
        }
    }
    res.send('not valid');
}

function getAllMessageGroupMember(req, res) {
    res.write('<html><body><ul>')
    for (let i = 0; i < mygroup.length; i++) {
        res.write('<li>' + mygroup[i].name + '</li>')
    }
    res.write('</ul></body></html>')
    res.send();
}

module.exports = {
    getMessageGroupMember,
    getAllMessageGroupMember
}