'use strict';
const Group = require('../model/group');

/**
 * Create group
 * This endpoint allows to create a new group.
 *
 * student Group Group object
 * returns Group
 **/
exports.createGroups = function({
                                  groupNumber,
                                  students,
                                  daysAndTimes
                                }) {
        return new Promise(function(resolve, reject) {

          new Group({
            groupNumber,
            students,
            daysAndTimes
          })
            .save()
            .then(
              group => { console.log('Group saved ', group);
                if (Object.keys(group).length > 0) {
                  resolve(group);
                } else {
                  reject();
                }
              },
              error => { console.log('Group not saved', error); }
            );

      });

}


/**
 *
 * returns List
 **/
exports.getGroups = function() {
  return new Promise(function(resolve, reject) {

    Group.find({}).then(
      groups => {

        if (Object.keys(groups).length > 0) {
          resolve(groups);
        } else {
          reject();
        }
      },
      error => { console.log('Unable to get students ', error); }
    );
  }).catch(err =>{
    console.log('Unable to get students ', error);

  });
}

