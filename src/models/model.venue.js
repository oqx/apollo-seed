const mongoose = require("mongoose");
require("mongoose-double")(mongoose);
const Schema = mongoose.Schema;

const VenueSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId },
    name: String,
    location: {
      address: String,
      city: String,
      state: String,
      zip: Number,
      country: String,
      geometry: {
        type: { type: String, default: "Point" },
        coordinates: {
          type: [Schema.Types.Double],
          default: [0, 0]
        }
      }
    },
    contact: {
      booking_email: String,
      booking_phone: String
    },
    social_media: {
      twitter: String,
      instagram: String,
      facebook: String
    },
    about: String,
    website: String,
    image: String,
    events: [
      {
        title: String,
        id: { type: Schema.Types.ObjectId }
      }
    ],
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
  },
  { _id: false }
);
VenueSchema.index({ "location.geometry": "2dsphere" });
module.exports = mongoose.model("venue", VenueSchema);
