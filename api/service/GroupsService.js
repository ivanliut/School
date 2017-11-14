'use strict';
const Student = require('../model/group');

/**
 * Create group
 * This endpoint allows to create a new group.
 *
 * student Group Group object
 * returns Group
 **/
exports.createGroups = function(student) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "daysAndTimes" : [ {
    "time" : "time",
    "day" : "Monday"
  }, {
    "time" : "time",
    "day" : "Monday"
  } ],
  "groupeNumber" : 0,
  "students" : [ 6, 6 ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * returns List
 **/
exports.getGroups = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "daysAndTimes" : [ {
    "time" : "time",
    "day" : "Monday"
  }, {
    "time" : "time",
    "day" : "Monday"
  } ],
  "groupeNumber" : 0,
  "students" : [ 6, 6 ]
}, {
  "daysAndTimes" : [ {
    "time" : "time",
    "day" : "Monday"
  }, {
    "time" : "time",
    "day" : "Monday"
  } ],
  "groupeNumber" : 0,
  "students" : [ 6, 6 ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

