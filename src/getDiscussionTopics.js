const fetchAll = require('./internal/fetchAll');
const buildOptions = require('./internal/util');

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrives all discussion topics in course
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Discussion topics
 */

const getDiscussionTopics = async (courseId, ...options) => {
  return fetchAll(canvasDomain + `/courses/${courseId}/discussion_topics?` + buildOptions(options));
};

module.exports = getDiscussionTopics;