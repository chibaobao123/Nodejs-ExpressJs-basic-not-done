const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
 	name : String,
	email : String,
	password : String,
	phone : String,
});
const Session = mongoose.model('Session', sessionSchema, "session");

module.exports = Session;