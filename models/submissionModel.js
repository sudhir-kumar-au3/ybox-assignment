const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const submissionSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    competition: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "competitions"
    }
});

module.exports = {
    submissionSchema
}