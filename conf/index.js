/**
 * Created by dinanjanag on 5/11/19.
 */
const { ENDPOINTS, HTTP_METHODS } = require('./To');
const { ERROR_CODES } = require('./ErrorCodes');
const { PATHS } = require('./Paths');

const BASE_URL = '/bridge';

const REDIS = {
  host: 'localhost',
  port: 6379
};

module.exports = {
  BASE_URL,
  ENDPOINTS,
  ERROR_CODES,
  REDIS,
  HTTP_METHODS,
  PATHS
};