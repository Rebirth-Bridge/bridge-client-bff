/**
 * Created by Chamath Jeevan on 8/11/19.
 */
const {
    hscodeRepo
} = require('../repository');
const log4js = require('log4js');

log4js.configure(require('../conf/log4js.json'));
const log = log4js.getLogger('hsCodeService');

const getHsCodes = () => {
    console.error('SERRVICEhscode');
    log.info(`Get all HS Codes of client`);
    const response = hscodeRepo.getHsCodes();
    return response;
};

const getHsCode = (id) => {
    log.info(`Get  HS Codes of client`);
    const response = hscodeRepo.getHsCode(id)
    return response;
};

const postHsCode = (body) => {
    log.info(`post HS Codes of ${body}`);
    const response = hscodeRepo.postHsCode(body);
    console.error('SERVICE -------->1');
    console.error(response);
    
    return response;
};

const putHsCode = (body) => {
    log.info(`post HS Codes of ${body}`);
    console.error('SERVICE -------->PUT');
    const response = hscodeRepo.putHsCode(body)
    return response;
};


const hsCodeService = {
    getHsCodes,
    getHsCode,
    postHsCode,
    putHsCode
};

module.exports = {
    hsCodeService,
};