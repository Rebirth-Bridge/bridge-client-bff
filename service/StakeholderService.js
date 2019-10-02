//nishakara

const {stakeholderRepo} = require('../repository');
const log4js = require('log4js');

log4js.configure(require('../conf/log4js.json'));
const log = log4js.getLogger('stakeholderService');

const getAll = () => {
    console.error('SERRVICStake');
    log.info(`Get all stakeholder of client`);
    const response = stakeholderRepo.getAll();
    return response;
}

const get = (ID) => {
    log.info(`Get stakeholder of client`);
    const response = stakeholderRepo.get(ID)
    return response;
}

const post = (body) => {
    log.info(`Post stakeholder to ${body}`);
    const response = stakeholderRepo.post(body)
    return response;
}

const put = (body) => {
    log.info(`Put stakeholder to ${body}`);
    const response = stakeholderRepo.put(body)
    return response;
}

const stakeholderService = {
    getAll,
    get,
    post,
    put
};

module.exports = {
    stakeholderService,
};