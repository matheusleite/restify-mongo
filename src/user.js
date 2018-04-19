import { modelNames } from "mongoose";
const app = require('./app');
const db = app.db

var userSchema = db.Schema({
    name: {
        type: String,
        required: true
      },
    email:{
        type: String,
        required: true
      },
    document: {
        type: String,
        required: true
      },
});

var User = db.model('User', userSchema);

module.exports = User;