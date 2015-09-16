var Homes = (function () {
    function Homes() {
    }
    Homes.index = function (request, response) {
        response.render('index', { title: 'Index' });
    };
    return Homes;
})();
module.exports = Homes;
