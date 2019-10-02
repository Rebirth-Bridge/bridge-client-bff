/**
 * Created by Chamath Jeevan on 8/11/19.
 */
const { materialRepo } = require('../repository');
const log4js = require('log4js');

log4js.configure(require('../conf/log4js.json'));
const log = log4js.getLogger('supplierService');

//supplier?? line 8

const getAll = () => {
    console.error('SERRVICeMaterial');
    log.info(`Get all material of client`);
    const response = materialRepo.getAll();
    return response;
};

const get = (id) => {
    log.info(`Get material of client`);
    const response = materialRepo.get(id)
    return response;
};

const post = (body) => {
    log.info(`post material of ${body}`);
    const response = materialRepo.post(body);
    return response;
};

const put = (body) => {
    log.info(`post material of ${body}`);
    const response = materialRepo.put(body)
    return response;
};

const materialService = {
    getAll,
    get,
    post,
    put
};

module.exports = {
    materialService,
};