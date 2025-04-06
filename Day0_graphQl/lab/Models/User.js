const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
      },
      password: {
        type: String,
        minlength: [6, 'Password must be at least 6 characters'],
      },
      role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
      },
      isVerified: {
        type: Boolean,
        default: false,
      }
    }
  );

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;