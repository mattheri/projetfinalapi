const mongoose = require('mongoose');

const regionSchema = new mongoose.Schema({
    nom: String,
    actif: Boolean,
    verifie: Boolean
});

regionSchema.statics.getRegions = function() {
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

regionSchema.statics.updateRegion = function(id, body) {
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

regionSchema.statics.deleteRegion = function(id) {
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

regionSchema.statics.findRegion = function(id) {
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

regionSchema.statics.addRegion = function(body) {
    return new Promise((resolve, reject) => {
        this.create(body, (err, doc) => {
            if (err) {
                console.log(err);
                reject(err);
            }

            resolve(doc);
        })
    })
}

module.exports = mongoose.model('Region', regionSchema);