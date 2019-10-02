//nishakara

const {bltypeRepo} = require ('../repository');
const log4js = require('log4js');

log4js.configure(require('../conf/log4js.json'));
const log = log4js.getLogger('bltypeService');

const getblAll = () => {
    console.error("ERRORBLSERVICE")
    log.info(`Get all B/l types of client`);
    const response = bltypeRepo.getblAll();
    return response;

}

const getbl = (ID) => {
    log.info(`Get B/l types of clinet`);
    const response = bltypeRepo.getbl(ID)
    return response;
}

const postbl = (body) => {
    log.info(`Post B/l types to ${body}`);
    const response = bltypeRepo.postbl(body)
    return response;
}

const putbl = (body) => {
    log.info(`Put B/l Types to ${body}`);
    const response = bltypeRepo.putbl(body)
    return response;
}

const bltypeService = {
    getblAll, 
    getbl, 
    putbl, 
    postbl
};

module.exports = {
    bltypeService,
}
