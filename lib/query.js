var mergeQueries = require('./helpers/mergeQueries');

module.exports = function (options) {
    return function (req, res, next) {
        if (options && options.find && options.find.query) {

            var query = options.find.query(req);

            if (query) {
                req.autorouteQuery = mergeQueries(req.autorouteQuery, query);
            }
        }
        next();
    }
}