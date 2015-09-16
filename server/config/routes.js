/// <reference path="../../typings/tsd.d.ts" />
function routes(app) {
    app.use('/', require('../homes'));
}
module.exports = routes;
