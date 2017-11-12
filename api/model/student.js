/**
 * Created by pc hp on 01.11.2017.
 */
const mongoose = require('mongoose');

const studentSchema = require('../schema/student');

const Student = mongoose.model('Student', studentSchema);




module.exports = Student;

