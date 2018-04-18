const mongoose = require("mongoose");
require("mongoose-double")(mongoose);
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    username: String,
    password: String,
    email: String,
    location: {
      city: String,
      state: String,
      country: String
    },
    social_media: {
      twitter: String,
      facebook: String
    },
    bands: [
      {
        name: String,
        id: String
      }
    ],
    venues: [
      {
        name: String,
        id: String
      }
    ],
    about: String,
    website: String,
    image: String,
    created_at: {
      type: Date
    },
    updated_at: {
      type: Date,
      default: Date.now
    },
    version: Number
  },
  { _id: false }
);

module.exports = mongoose.model("user", UserSchema);
