const mongoose = require("mongoose");
const {userSchema} = require("./models/userModel");
const {competitionSchema} = require("./models/competitionModel");
const {submissionSchema} = require("./models/submissionModel");
const {likeSchema} = require("./models/likeModel");
const dotenv=require("dotenv");
dotenv.config();
// connect mongodb database
let url;
if(process.env.DB_URL) url = process.env.DB_URL;
else url ="mongodb://localhost:27017/yBox";

const connection = mongoose.createConnection(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
connection.on("error", () => {
    console.log("> error occurred during db connection")
});
connection.on("open",() => {
    console.log("> successfully connected to db")
})
const Users = connection.model("users", userSchema);
const Competitions = connection.model("competitions", competitionSchema);
const Submissions = connection.model("submissions", submissionSchema);
const Likes = connection.model("likes", likeSchema);

module.exports = {
    Users,
    Competitions,
    Submissions,
    Likes
}
