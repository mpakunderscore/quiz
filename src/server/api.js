const PACKAGE = require("../../package.json");
const {getChat, getModels} = require("./openai");
const {setToken, getToken, getTokens} = require("./database/database");
const {generateImage} = require("./midjorney");
const prefix = '/api'
const authToken = process.env.AUTH_TOKEN

const initAPI = (app) => {

    const checkAuth = (request) => {
        return request.cookies && request.cookies.auth === authToken
    }

    app.get(prefix + '/version', async (request, response) => {
        response.json(
            {
                version: PACKAGE.version,
            })
    })
    app.get(prefix + '/login', async (request, response) => {
        response.json(
            {
                ip: request.ip,
                cookies: request.cookies,
                headers: request.headers,
            })
    })

    app.get(prefix + '/tokens', async (request, response) => {
        response.json(
            {
                tokens: await getTokens()
            })
    })

    app.get(prefix + '/models', async (request, response) => {
        response.json(
            {
                models: await getModels()
            })
    })


    let routes = [];
    app._router.stack.forEach(function (r) {
        if (r.route && r.route.path) {
            routes.push(r.route.path)
        }
    });

    app.get(prefix, function (request, response) {
        response.json(routes);
    });
}

module.exports = {initAPI}