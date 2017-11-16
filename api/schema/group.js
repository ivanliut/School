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
  daysAndTimes: {
        type: [
          {
            day:{type: String},
            time: {type: String}
          }
        ]
      }

},

  {
    toJSON: {virtuals: true},
    toObject: {virtuals: true},

  });

groupSchema.virtual('students', {
  ref: 'Student',
  localField: '_id',
  foreignField: 'currentGroup'
});


module.exports = groupSchema;
