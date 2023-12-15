const fetchAll = require('./internal/fetchAll');
const buildOptions = require('./internal/util');

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves all PageViews of a user
 * @param {Number} userId get pageviews of user.
 * @return {Promise} A promise that resolves to a list of PageView objects: https://canvas.instructure.com/doc/api/users.html#PageView
 */

function getUserPageViews(userId, ...options) {
  return fetchAll(canvasDomain + `/users/${userId}/page_views?` + buildOptions(options));
}
module.exports = getUserPageViews;