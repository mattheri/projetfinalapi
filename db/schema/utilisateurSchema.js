const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    courriel: String,
    telephone: String,
    ville: String,
    competences: Array,
    formations: Array,
    cv: String,
    message: String,
    role: String,
    hash: String
});

utilisateurSchema.statics.getUtilisateurs = function() {
    return new Promise((resolve, reject) => {
        this.find({}, (err, docs) => {
          if(err) {
            console.error(err)
            return reject(err)
          }
          
          resolve(docs)
        })
    });
}

utilisateurSchema.statics.updateUtilisateur = function(id, body) {
    return new Promise((resolve, reject) => {
        this.findByIdAndUpdate(id, body, (err, doc) => {
            if (err) {
                console.log(err);
                reject(err);
            }

            resolve(doc);
        })
    })
}

utilisateurSchema.statics.deleteUtilisateur = function(id) {
    return new Promise((resolve, reject) => {
        this.findByIdAndDelete(id, (err, doc) => {
            if (err) {
                console.log(err);
                reject(err);
            }

            resolve(doc);
        })
    })
}

utilisateurSchema.statics.findUtilisateur = function(id) {
    return new Promise((resolve, reject) => {
        this.findById(id, (err, doc) => {
            if (err) {
                console.log(err);
                reject(err);
            }

            resolve(doc);
        })
    })
}

utilisateurSchema.statics.findUtilisateurByEmail = function(email) {
    return new Promise((resolve, reject) => {
        this.findOne({ courriel: email }).lean().exec(
            (err, doc) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
    
                resolve(doc);
            })
        }
        )
}

utilisateurSchema.statics.addUtilisateur = function(body) {
    return new Promise((resolve, reject) => {
        this.create(body, (err, doc) => {
            if (err) {
                console.log(err);
                reject(err);
            }

            resolve(doc.toObject());
        })
    })
}

module.exports = mongoose.model('Utilsateur', utilisateurSchema);