'use strict';
const Student = require('../model/student');

/**
 * Create student
 * This endpoint allows to create new student.
 *
 * student Student Student object
 * returns Student
 **/
exports.createStudents = function(
  {userId,firstName,lastName,currentGroup,recordOfMonthlyPayments,groupHistoryInfo}) {
  return new Promise(function(resolve, reject) {

    new Student({
      userId,
      firstName,
      lastName,
      currentGroup,
      recordOfMonthlyPayments,
      groupHistoryInfo
    })
      .save()
      .then(
        student => { console.log('Student saved ', student);
          if (Object.keys(student).length > 0) {
            resolve(student);
          } else {
            reject();
          }
        },
        error => { console.log('Student not saved', error); }
      );

  });
}


/**
 *
 * returns List
 **/
exports.getStudents = function() {
  return new Promise(function(resolve, reject) {
    Student.find({}).then(
      students => {

        if (Object.keys(students).length > 0) {
          resolve(students);
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

