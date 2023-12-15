const fetch = require('./internal/fetch');
const buildOptions = require('./internal/util');
const getOptions = require('./internal/getOptions');

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves a single rubric
 * @param {Number} courseId the course id.
 * @param {Number} rubricId the rubric id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a Rubric object: https://canvas.instructure.com/doc/api/rubrics.html
 */

function getRubric(courseId, rubricId, ...options) {
  return fetch(canvasDomain + `/courses/${courseId}/rubrics/${rubricId}?` + buildOptions([getOptions.rubric.graded_assessments, getOptions.rubric.data_assessment, options]));
}
module.exports = getRubric;