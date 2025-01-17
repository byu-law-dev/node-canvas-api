const fetchAll = require('./internal/fetchAll');
const buildOptions = require('./internal/util');

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves all users under an Account
 * @param {Number} accountId the account id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of User objects: https://canvas.instructure.com/doc/api/users.html#User
 */

function getUsersInAccount(accountId, ...options) {
  return fetchAll(canvasDomain + `/accounts/${accountId}/users?` + buildOptions(options));
}
module.exports = getUsersInAccount;