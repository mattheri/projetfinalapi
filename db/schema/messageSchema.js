const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  input: String,
  output: String,
  message: String,
  date: Date,
  active: Boolean,
  readInput: Boolean,
});

messageSchema.statics.updateMessage = function (id, body) {
  return new Promise((resolve, reject) => {
    this.findByIdAndUpdate(id, body, (err, doc) => {
      if (err) {
        console.log(err);
        reject(err);
      }

      resolve(doc);
    });
  });
};

messageSchema.statics.findMessages = function (id) {
  return new Promise((resolve, reject) => {
    this.find(
      { $or: [{ input: id }, { output: id }] },
      { sort: { date: 1 } },
      (err, doc) => {
        if (err) {
          console.log(err);
          reject(err);
        }

        resolve(doc);
      }
    );
  });
};

messageSchema.statics.addMessage = function (body) {
  return new Promise((resolve, reject) => {
    this.create(body, (err, doc) => {
      if (err) {
        console.log(err);
        reject(err);
      }

      resolve(doc);
    });
  });
};

module.exports = mongoose.model("Message", messageSchema);
