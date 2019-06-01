(function() {

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var etudiantSchema = new Schema({
        nom: { type : String, required : true},
        prenom: { type : String, required : true},
        adresse: { type : String, required : true},
        telephone: { type : Number, required : true},
        email: { type : String, required : true},
       
    });

    module.exports = {
        etudiantModel : mongoose.model('Etudiants', etudiantSchema)
    }
})();
