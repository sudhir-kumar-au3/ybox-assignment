const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const competitionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
});

module.exports = {
    competitionSchema
}