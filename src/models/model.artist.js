const mongoose = require("mongoose");
require("mongoose-double")(mongoose);
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  location: {
    city: String,
    state: String,
    country: String
  },
  contact: {
    booking_email: String,
    booking_phone: String,
    band_email: String
  },
  social_media: {
    twitter: String,
    instagram: String,
    facebook: String
  },
  about: String,
  website: String,
  image: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  created_by: {
    username: { type: String },
    _id: { type: Schema.Types.ObjectId }
  }
});

module.exports = mongoose.model("artist", ArtistSchema);
