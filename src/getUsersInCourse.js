const fetchAll = require('./internal/fetchAll');
const buildOptions = require('./internal/util');

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves all users in course
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of User objects: https://canvas.instructure.com/doc/api/users.html#User
 */

function getUsersInCourse(courseId, ...options) {
  return fetchAll(canvasDomain + `/courses/${courseId}/users?` + buildOptions(options));
}
module.exports = getUsersInCourse;