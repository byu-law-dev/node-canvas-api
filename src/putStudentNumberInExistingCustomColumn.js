const getOptions = require('./internal/getOptions');
const getUsersInCourse = require('./getUsersInCourse');
const putStudentNumberInGradeColumn = require('./putStudentNumberInGradeColumn');

/**
 * Put student number in existing custom column by ID
 * @param {Number} courseId the course ID of the target course.
 * @param {Number} customGradeBookId the ID of the custom gradebook ID.
 * @return {Promise} A promise that resolves to a CustomColumn object: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html#CustomColumn
 */

const putStudentNumberInExistingCustomColumn = async (courseId, customGradeBookId) => {
  const studentObjs = await getUsersInCourse(courseId, getOptions.users.enrollmentType.student);
  const customGradebookResponse = Promise.all(studentObjs.map(({ id, sis_user_id }) => putStudentNumberInGradeColumn(courseId, customGradeBookId, id, { 'column_data[content]': sis_user_id })));
  return customGradebookResponse;
};

module.exports = putStudentNumberInExistingCustomColumn;