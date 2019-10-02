/**
 * Created by Chamath Jeevan on 8/11/19.
 */
const { incotermService } = require('../service/IncotermService');
const {
    PATHS,
    HTTP_METHODS
} = require('../conf');
const JSON = require('circular-json');

const getHandler = (req, res) => {
    try {

        if (req.params.id !== null && typeof req.params.id !== 'undefined') {
            incotermService.get(req.params.id).then(function (result) {
                const json = JSON.stringify(result.data);
                return res.send(json)
            }).catch(function (error) {
                console.error(error);
                const json = JSON.stringify(error);
                return res.status(500).send(json);
            });
        } else {
            incotermService.getAll().then(function (result) {
                const json = JSON.stringify(result.data);
                return res.send(json)
            }).catch(function (error) {
                console.error(error);
                const json = JSON.stringify(error);
                return res.status(500).send(json);
            });
        }
    } catch (error) {
        console.error(error);
        const json = JSON.stringify(error);
        return res.status(500).send(json);
    }
};

const postHandler = (req, res) => {

    try {
        incotermService.post(req.body).then(function (result) {
            const json = JSON.stringify(result);
            return res.send(json);
        }).catch(function (error) {
            console.error(error);
            const json = JSON.stringify(error);
            return res.status(500).send(json);
        });
    } catch (error) {
        const json = JSON.stringify(error);
        console.error(error);
        return res.status(500).send(json);
    }
};

const putHandler = (req, res) => {
    console.log("bffInc1")
    try {
        incotermService.put(req.body).then(function (result) {
            const json = JSON.stringify(result);
            return res.send(json);
        }).catch(function (error) {
            const json = JSON.stringify(error);
            return res.status(500).send(json);
        });
    } catch (error) {
        const json = JSON.stringify(error);
        return res.status(500).send(json);
    }
};

module.exports = {
    incoterm: {
        [PATHS.INCOTERM]: [{
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
        [PATHS.INCOTERM_ID]: [{
            method: HTTP_METHODS.GET,
            handler: getHandler
        }]
    }
};