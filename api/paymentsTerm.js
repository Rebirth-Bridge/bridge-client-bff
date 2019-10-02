/**
 * Created by Chamath Jeevan on 8/11/19.
 */
const { paymenttermService } = require('../service/PaymenttermService');
const {
    PATHS,
    HTTP_METHODS
} = require('../conf');
const JSON = require('circular-json');
const { ERROR_CODES} = require('../conf/ErrorCodes');

const getHandler = (req, res) => {
    try {
        if (req.params.ID !== null && typeof req.params.ID !== 'undefined') {
           
            paymenttermService.get(req.params.ID).then(function (result) {                
                return res.status(result.status).send(result.data);
                //const json = JSON.stringify(result.data);
                //return res.send(json)
                
            }).catch(function (error) {
                
                //console.error(error);
                return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
               // const json = JSON.stringify(error);
                //return res.status(500).send(json);
            });
        } 
        else {
           
            paymenttermService.getAll().then(function (result) {
               
                return res.status(result.status).send(result.data);
                //const json = JSON.stringify(result.data);
                //return res.send(json)
            }).catch(function (error) {
              
                console.error(error);
                return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
                //const json = JSON.stringify(error);
                //return res.status(500).send(json);
                
            });
        }
    } catch (error) {
        console.log(error);
        
        return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
     
        //const json = JSON.stringify(error);
        //return res.status(500).send(json);
    }
};

const postHandler = (req, res) => {

    try {
        paymenttermService.post(req.body).then(function (result) {
            return res.status(result.status).send(result.data);
            //const json = JSON.stringify(result);
            //return res.send(json);
        }).catch(function (error) {
            console.error(error);
            return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
        
            //const json = JSON.stringify(error);
            //return res.status(500).send(json);
        });
    } catch (error) {
        //const json = JSON.stringify(error);
        console.error(error);

        return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
        //return res.status(500).send(json);
    }
};

const putHandler = (req, res) => {
    try {
        paymenttermService.put(req.body).then(function (result) {
            return res.status(result.status).send(result.data);
           // const json = JSON.stringify(result);
           // return res.send(json);
        }).catch(function (error) {
            return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
            //const json = JSON.stringify(error);
            //return res.status(500).send(json);
        });
    } catch (error) {
        return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
   
        //const json = JSON.stringify(error);
        //return res.status(500).send(json);
    }
};

module.exports = {
    paymentsTerm: {
        [PATHS.PAYMENT_TERM]: [{
            method: HTTP_METHODS.GET,
            handler: getHandler
        },
        {
            method: HTTP_METHODS.POST,
            handler: postHandler
        },
        {
            method: HTTP_METHODS.PUT,
            handler: putHandler
        }
        ],
        [PATHS.PAYMENT_TERM_ID]: [{
            method: HTTP_METHODS.GET,
            handler: getHandler
        }]
    }
};