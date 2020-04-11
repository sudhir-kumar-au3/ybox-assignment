const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const likeSchema = new Schema({
    submission: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "submissions"
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "competitions",
    }
});

module.exports = {
    likeSchema
}