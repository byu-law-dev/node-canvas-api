const putRequest = require('./internal/put');

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Update a course
 * @param {Number} courseId the course id.
 * @param {Object} options the options to pass in body of PUT request: https://canvas.instructure.com/doc/api/courses.html#method.courses.update
 * @return {Promise} A promise that resolves to a course metadata response: https://canvas.instructure.com/doc/api/courses.html#method.courses.update
 */

function updateCourse(courseId, options) {
  return putRequest(canvasDomain + `/courses/${courseId}`, options);
}
module.exports = updateCourse;