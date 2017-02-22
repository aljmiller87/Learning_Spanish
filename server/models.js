const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	name: {type: String, required: true},
	googleId: {type: String, unique: true, required: true},
	accessToken: {type: String, unique: true, required: true}
});

userSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    name: this.name,
    googleId: this.googleId,
    accessToken: this.accessToken
  };
}

const User = mongoose.model('User', userSchema);

module.exports = User;