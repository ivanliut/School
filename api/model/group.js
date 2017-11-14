/**
 * Created by pc hp on 15.11.2017.
 */
const mongoose = require('mongoose');

const groupSchema = require('../schema/group');

const Group = mongoose.model('Group', groupSchema);




module.exports = Group;
