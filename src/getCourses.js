const fetchAll = require('./internal/fetchAll');
const buildOptions = require('./internal/util');

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves all courses in a deptId
 * @param {Number} deptId the dept id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a Course object: https://canvas.instructure.com/doc/api/courses.html#Course
*/

function getCourses(deptId, ...options) {
  return fetchAll(canvasDomain + `/accounts/${deptId}/courses?` + buildOptions(options));
}
module.exports = getCourses;