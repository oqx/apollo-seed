const mongoose = require("mongoose");
require("mongoose-double")(mongoose);
const Schema = mongoose.Schema;
const VenueModel = require("./model.venue");

const EventSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  description: String,
  artists: [
    {
      name: String,
      _id: Schema.Types.ObjectId
    }
  ],
  datetime: { type: Date, required: true },
  type: String,
  venue: { type: Schema.Types.ObjectId, ref: "venue" },
  created_at: {
    type: Date,
    default: Date.now
  },
  created_by: {
    username: { type: String },
    _id: { type: Schema.Types.ObjectId }
  }
});

module.exports = mongoose.model("event", EventSchema);
