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
  currentGroup: { type: Number, required: true},
  recordOfMonthlyPayments: {
    type: [
      {
        date: { type: Date, default: Date.now },
        moneyPaid: Number
      }
    ]
  },
  groupHistoryInfo: {
    type: [
      {
        groupNumber: Number,
        startDate: {type: Date },
        endDate: {type: Date }
      }
    ]
  }
});

module.exports = studentSchema;
