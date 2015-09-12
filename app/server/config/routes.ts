/// <reference path="../../../typings/tsd.d.ts" />

function routes(app) {
    app.use('/', require('../homes'));
}
  
export = routes;

