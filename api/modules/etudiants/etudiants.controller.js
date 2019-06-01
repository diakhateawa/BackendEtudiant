(function () {
    const Etudiants= require('./etudiants.model').etudiantModel;
    module.exports = function(){
        return {
            list: function(req,res){
                Etudiants.find({},(error,list) =>{
                    if(error){
                        res.status(500).json({
                            status: "error",
                           body: error
                        })
                    }else{
                        res.status(200).json({
                            status: "success",
                            body: list
                        })
                    }
                });
            },
            create: function(req,res) {
                console.log('save',req.body);
                var etudiant = new Etudiants(req.body);
                etudiant.save((error,rep)=>{
                    if(error){
                        res.status(500).json({
                            status: "error",
                            body: error
                        })
                    }else{
                        res.status(200).json({
                            status: "success",
                            body: rep
                        })
                    }
                })
                
            },
            read: function(req,res){
                Etudiants.findOne({_id: req.params.id}, function(error, etudiant){
                    if(error){
                        res.status(500).json({
                            status: "error",
                            body: error
                        })
                    }else if(!etudiant){
                        res.status(404).json({
                            status: "not found",
                            body: etudiant
                        })
                    }
                    else{
                        res.status(200).json({
                            status: "success",
                            body: etudiant
                        })
                    }
                })
            },
            update: function(req,res){
                Etudiants.findOneAndUpdate({_id: req.params.id},req.body, {new: true} ,function(error, etudiant){
                    if(error){
                        res.status(500).json({
                            status: "error",
                            body: error
                        })
                    }else{
                        res.status(200).json({
                            status: "success",
                            body: etudiant
                        })
                    }
                })
            },
            delete: function (req,res) {
                Etudiants.deleteOne({_id: req.params.id}, function(error, rep){
                    if(error){
                        res.status(500).json({
                            status: "error",
                            body: error
                        })
                    }else{
                        res.status(201).end()
                    }
                })
            }
        }
    }
})();