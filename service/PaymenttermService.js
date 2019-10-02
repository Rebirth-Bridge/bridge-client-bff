/**
 * Created by Chamath Jeevan on 8/11/19.
 */
const { paymenttermRepo } = require('../repository');
const log4js = require('log4js');

log4js.configure(require('../conf/log4js.json'));
const log = log4js.getLogger('paymenttermService');

const getAll = () => {
    log.info(`Get all payment term`);
    const response = paymenttermRepo.getAll();
    return response;
};

const get = (id) => {
    log.info(`Get supplier of client`);
    const response = paymenttermRepo.get(id)
    return response;
};

const post = (body) => {
    log.info(`post supplier of ${body}`);
    const response = paymenttermRepo.post(body);
    return response;
};

const put = (body) => {
    log.info(`post supplier of ${body}`);
    const response = paymenttermRepo.put(body)
    return response;
};

const paymenttermService = {
    getAll,
    get,
    post,
    put
};

module.exports = {
    paymenttermService,
};