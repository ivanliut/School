/**
 * Created by pc hp on 01.11.2017.
 */
const mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
  userId: {
    type: Number,
    unique: true,
    required: true
  },
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  currentGroup: {
    type: mongoose.Schema.ObjectId,
    ref: 'Group',
    required: 'You must supply group number for a student'},
  recordOfMonthlyPayments: {
    type: [
      {
        date: { type: Date, default: Date.now },
        moneyPaid: Number
      }
    ]
  }
});

module.exports = studentSchema;
