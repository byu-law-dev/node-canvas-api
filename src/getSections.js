const fetchAll = require('./internal/fetchAll');
const buildOptions = require('./internal/util');

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves all sections in course
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Section objects: https://canvas.instructure.com/doc/api/sections.html
 */

function getSections(courseId, ...options) {
  return fetchAll(canvasDomain + `/courses/${courseId}/sections?` + buildOptions(options));
}
module.exports = getSections;