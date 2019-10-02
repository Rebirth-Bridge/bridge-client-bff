/**
 * Created by Chamath Jeevan on 8/11/19.
 */
const {
    hsCodeService
} = require('../service/HsCodeService');
const {
    PATHS,
    HTTP_METHODS
} = require('../conf');
const JSON = require('circular-json');

const getHsCodesHandler = (req, res) => {
    try {
        if (req.params.id !== null && typeof req.params.id !== 'undefined') {
            hsCodeService.getHsCode(req.params.id).then(function(result) {
                const json = JSON.stringify(result.data);
                return res.send(json)
            }).catch(function(error) {
                console.error(error);
                const json = JSON.stringify(error);
                return res.send(json);
            });
            
        } else {
            hsCodeService.getHsCodes().then(function(result) {
                const json = JSON.stringify(result.data);
                return res.send(json)
            }).catch(function(error) {
                console.error(error);
                const json = JSON.stringify(error);
                return res.send(json);
            });
        }
    } catch (error) {
        const json = JSON.stringify(error);
        return res.status(500).send(json);
        
    }
};

const postHandler = (req, res) => {
    try {
        hsCodeService.postHsCode(req.body).then(function(result) {
            const json = JSON.stringify(result);
            return res.status(201).send(json);
        }).catch(function(error) {
            const json = JSON.stringify(error);
            return res.status(500).send(json);
        });
    } catch (error) {
        const json = JSON.stringify(error);
        return res.status(500).send(json);
    }
};

const putHandler = (req, res) => {
    try {
        hsCodeService.putHsCode(req.body).then(function(result) {
            const json = JSON.stringify(result.data);
            return res.send(json);
        }).catch(function(error) {
            const json = JSON.stringify(error);
            return res.status(500).send(json);
        });
    } catch (error) {
        const json = JSON.stringify(error);
        return res.status(500).send(json);
    }
};

module.exports = {
    hscode: {
        [PATHS.HSCODE]: [{
                method: HTTP_METHODS.GET,
                handler: getHsCodesHandler
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
        [PATHS.HSCODE_ID] :[{
            method: HTTP_METHODS.GET,
            handler: getHsCodesHandler
        }]
    }
};