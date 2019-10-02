//nishakara
const axios = require('axios');
const redis = require('redis');
const {
    promisify
} = require ('util');
const {
    REDIS,
    HTTP_METHODS,
    ENDPOINTS
} = require('../conf');
const log4js = require('log4js');

log4js.configure(require('../conf/log4js.json'));
const log = log4js.getLogger('apiRepository');

const client = '6e65ad20-d576-43f2-95fa-19daf959070d';

const username = 'UAT USER';

const getAll = async () => {
    const url = ENDPOINTS.STAKEHOLDER.base + '/' + client + ENDPOINTS.STAKEHOLDER.context;
    try {
        log.info(`Calling ${url}`);
        const response = await axios.get(url);
        return {status : response.status, data :  response.data};
        //return response;

    }
    catch(err) {
        //log.error(`Error occurred while fetching stakeholder- ${err}`, err);
        //console.error(err);
        //throw err;
        if(err.response.status && Number.isInteger(err.response.status)) {
            return {status : err.response.status, data : err.response.data};
        }
        clog.error(` Error Stakeholder code- ${err}`, err);
        throw err;
    }
};







const get = async (ID) => {
    const url = ENDPOINTS.STAKEHOLDER.base + '/' + client + ENDPOINTS.STAKEHOLDER.context + '/' + ID;
    try {
        log.info(`Calling ${url}`);
        const response = await axios.get(url);
        return {status : response.status, data :  response.data};
        //return response;
    } catch(err) {

       /* log.error(`Error occured while fetching Stakeholder- ${err}`, err);
        console.error(err);
        throw err;  */
        if(err.response.status && Number.isInteger(err.response.status)) {
            return {status : err.response.status, data : err.response.data};
        }
        clog.error(` Error Stakeholder code- ${err}`, err);
        throw err;
    }
};






const post = async (body) => {
    const url = ENDPOINTS.STAKEHOLDER.base + '/' + client + ENDPOINTS.STAKEHOLDER.context;
    const headers = {
        'Content-Type': 'application/json',
        'InitiatedBy': username,
        'Client_ID': client
    }
    try {
        log.info(`Calling ${url}`);
        const response = await axios.post(url, body, {
            headers: headers
        })
        return {status : response.status, data :  response.data};
        //return response;
    } catch (err) {
        if(err.response.status && Number.isInteger(err.response.status)) {
            return {status : err.response.status, data : err.response.data};
        }
        log.error(` Error occurred while inserting Stakeholder- ${err}`, err);
        throw err;
    }
};






const put = async (body) => {
    const url = ENDPOINTS.STAKEHOLDER.base + '/' + client + ENDPOINTS.STAKEHOLDER.context;
    const headers = {
        'Content-Type': 'application/json',
        'InitiatedBy': username,
        'Client_ID': client
    }
    try {
        log.info(`Calling ${url}`);
        const response = await axios.put(url, body, {
            headers: headers
        })
        return {status : response.status, data :  response.data};
        //return response;
    } catch (err){
        if(err.response.status && Number.isInteger(err.response.status)) {
            return {status : err.response.status, data : err.response.data};
        }
        log.error(`Error occurred while updating Stakeholder- ${err}`, err);
        throw err;
    }
};

module.exports = {
    getAll,
    get,
    post,
    put

};
