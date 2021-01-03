const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
 	name : String,
	email : String,
	password : String,
	phone : String,
});
const Users = mongoose.model('Users', usersSchema, "users");

module.exports = Users;