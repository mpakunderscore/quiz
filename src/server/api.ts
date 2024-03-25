const {getHosts, updateHost, getConfig} = require("./database/database.ts");

const PACKAGE = require("../../package.json");
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

    app.get(prefix + '/hosts', async (request, response) => {
        response.json(await getHosts())
    })

    app.get(prefix + '/config', async (request, response) => {
        response.json(await getConfig())
    })

    app.post(prefix + '/status', async (request, response) => {
        const data = {ip: request.ip, ...request.body}
        console.log(data)
        updateHost(data)
        response.json({status: true})
    })

    let routes = [];
    app._router.stack.forEach(function (r) {
        if (r.route && r.route.path) {
            routes.push(r.route.path)
        }
    })

    app.get(prefix, function (request, response) {
        response.json(routes);
    })

    console.log('API INIT')
}

export {initAPI}