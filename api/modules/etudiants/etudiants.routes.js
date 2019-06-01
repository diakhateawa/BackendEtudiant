(function () {
    module.exports = function(app){
        const Ctrl = require('./etudiants.controller')();
        app.route('/etudiants')
            .get(Ctrl.list)
            .post(Ctrl.create)
        app.route('/etudiants/:id')
            .get(Ctrl.read)
            .put(Ctrl.update)
            .delete(Ctrl.delete)
    }
})();