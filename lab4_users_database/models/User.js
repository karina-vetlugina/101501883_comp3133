const mongoose = require("mongoose");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const cityRegex = /^[A-Za-z ]+$/;
const urlRegex = /^https?:\/\/.+/i;
const zipRegex = /^\d{5}-\d{4}$/;            // 12345-1234
const phoneRegex = /^\d-\d{3}-\d{3}-\d{4}$/; // 1-123-123-1234

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },

    username: {
      type: String,
      required: [true, "username is required"],
      minlength: [4, "username must be at least 4 characters"],
      maxlength: [100, "username must be at most 100 characters"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [emailRegex, "email must be valid"],
    },

    address: {
      street: String,
      suite: String,

      city: {
        type: String,
        required: [true, "city is required"],
        trim: true,
        validate: {
          validator: (v) => cityRegex.test(v),
          message: "city must contain only alphabets and spaces",
        },
      },

      zipcode: {
        type: String,
        required: [true, "zipcode is required"],
        match: [zipRegex, "zipcode format must be 12345-1234"],
      },

      geo: {
        lat: String,
        lng: String,
      },
    },

    phone: {
      type: String,
      required: [true, "phone is required"],
      match: [phoneRegex, "phone format must be 1-123-123-1234"],
    },

    website: {
      type: String,
      required: [true, "website is required"],
      trim: true,
      validate: {
        validator: (v) => urlRegex.test(v),
        message: "website must be a valid URL starting with http or https",
      },
    },

    company: {
      name: String,
      catchPhrase: String,
      bs: String,
    },
  },
  { collection: "users", timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);