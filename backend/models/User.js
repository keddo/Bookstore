const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  postalCode: {
    type: String
  },
  country: {
    type: String
  },
  profile: {
    type: String,
  },
});

// Define a pre-save middleware to generate the profile URL before saving the user
userSchema.pre('save', function(next) {
  // Check if the profile URL is already set or the user has a first name and last name
  if (!this.profile && this.firstName && this.lastName) {
    // Construct the profile URL with the user's first name and last name
    this.profile = `https://eu.ui-avatars.com/api/?name=${encodeURIComponent(this.firstName)}+${encodeURIComponent(this.lastName)}&size=250`;
  }
  next();
});

const User = mongoose.model('User', userSchema);

export default User;
