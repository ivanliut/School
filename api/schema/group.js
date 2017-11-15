/**
 * Created by pc hp on 15.11.2017.
 */

const mongoose = require('mongoose');

var groupSchema = mongoose.Schema({
  groupNumber: {
    type: Number,
    unique: true,
    required: true
  },
  students: {
    type: [
      {
        studentId: {
          type: Number,
          unique: true,
          required: true
        }
      }
    ]
  },
  daysAndTimes: {
        type: [
          {
            day:[{type: string}] , // ['Tuesday']
            time: [{type: string}] // ['18:00']
          }
        ]
      }

});

module.exports = groupSchema;
