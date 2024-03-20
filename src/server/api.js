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