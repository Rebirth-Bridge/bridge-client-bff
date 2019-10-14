const axios = require('axios');
const redis = require('redis');
const {
    promisify
}   = require('util');
const {
    REDIS,
    HTTP_METHODS,
    ENDPOINTS
} = require ('../conf');
const log4js = require('log4js');


log4js.configure(require('../conf/log4js.json'));
const log = log4js.getLogger('apiRepository');
//const client = '6e65ad20-d576-43f2-95fa-19daf959070d';
//const username = 'UAT USER';

const getblAll = async () => {
    //const url = ENDPOINTS.BLTYPE.base + '/' + client + ENDPOINTS.BLTYPE.context;
    const url = ENDPOINTS.BLTYPE.base + ENDPOINTS.BLTYPE.context;
    console.log(url);
    try {
        log.info(`Calling ${url}`);
        const response = await axios.get(url);
        console.log("getbltyprALL",response)
        return response;
        
    }
    catch(err) {
        log.error(`Error occurred while fetching B/L Types- ${err}`, err);
        console.error(err);
        throw err;
    }

    
};

const getbl = async (ID) => {
    //const url = ENDPOINTS.BLTYPE.base + '/' + client + ENDPOINTS.BLTYPE.context + '/' + ID;
    const url = ENDPOINTS.BLTYPE.base +  ENDPOINTS.BLTYPE.context + '/' + ID;
    try {
        log.info(`Calling ${url}`);
        const response = await axios.get(url);
        //console.log("getbltypr",response)
        return response;

    }
    catch (err) {
        log.error(`Error occured while fetching B/L Types- ${err}`, err);
        console.error(err);
        throw err;
    }
};

const postbl = async (body) => {
    //const url = ENDPOINTS.BLTYPE.base + '/' + client + ENDPOINTS.BLTYPE.context;
    const url = ENDPOINTS.BLTYPE.base + ENDPOINTS.BLTYPE.context;
    const headers = {
        'Content-Type' : 'application/json',
        //'InitiatedBy' :username,
        //'Client_ID' : client
    }
    try {
        log.info(`Calling ${url}`);
        const response = await axios.post(url, body, {
                headers : headers
        })
        return response;
    }
    catch (err) {
        log.error (`Error occured while inserting B/L Types- ${err}`, err);
        throw err;
    }
};

const putbl = async (body) => {
    console.log("bffRepo1");
    //const url = ENDPOINTS.BLTYPE.base +  ENDPOINTS.BLTYPE.context + '/' + ID;
   const url = ENDPOINTS.BLTYPE.base +  ENDPOINTS.BLTYPE.context;
   console.log("bfputxxx1"); 
   //console.log(url); 
   const headers = {
        'Content-Type' : 'application/json',
       // 'InitiatedBy' : username,
        //'Client_ID' : client
    }
    try {
        
        //const url = ENDPOINTS.BLTYPE.base +  ENDPOINTS.BLTYPE.context + '/' + ID;
        console.log(url);
        console.log("bffrepo2");
        log.info(`Calling ${url}`);
        const response = await axios.put(url, body, {
            
            headers : headers
            
        })
        console.log("bffRepo3");
       return response;
    }
    catch(err) {
        console.log("bffrepo4");
        console.error(err)
        log.error(`Error occured while updating B/L types- ${err}`, err);
        throw err;
    }
    
};

module.exports = {
    getblAll,
    getbl,
    postbl,
    putbl
};