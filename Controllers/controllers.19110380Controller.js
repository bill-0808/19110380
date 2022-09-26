const { mygroup } = require('../Models/models.group');

function getGroupMember(req, res) {
    const id = Number(req.params.id);
    var member;
    for (let i = 0; i < mygroup.length; i++) {
        if (mygroup[i].id == id) {
            member = mygroup[i];
        }
    }
    if (member) {
        res.status(200).json(member);
    }
    else {
        res.send('not valid');
    }
}

function addNewMember(req, res) {
    const groupMember = ['19110404', '19110497'];
    const newMember = { id: req.body.id, name: req.body.name };
    if (!groupMember.includes(newMember.id.toString())) {
        res.send('not valid')
    }
    else {
        mygroup.push(newMember);
        res.status(200).json(mygroup)
    }
}

module.exports = {
    getGroupMember,
    addNewMember
}