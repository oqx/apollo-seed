const { Types } = require("mongoose");
const { ObjectId } = Types;
module.exports = [
  {
    name: "Kihndyn Peters",
    _id: ObjectId("5a7e2f995266e5ac6c3cef2f"),
    location: {
      city: "Minneapolis",
      state: "MN",
      country: "US"
    },
    contact: {
      booking_email: "booking@website.com",
      booking_phone: "555-555-5555",
      band_email: "band@email.com"
    },
    social_media: {
      twitter: "@band",
      instagram: "www.instagram.com/band",
      facebook: "www.facebook.com/band"
    },
    about: "singer songwriter",
    website: "www.band.com",
    image: "https://i.imgur.com/eoyj7UP.jpg",
    geometry: { type: "Point", coordinates: [-93.288504, 44.949367] },
    created_by: {
      username: "ohx",
      _id: ObjectId("5a7e2f995266e5ac6c3cef9d")
    }
  },
  {
    name: "Handsome Ghost",
    _id: ObjectId("5a82888ab4fd467c7743fff7"),
    location: {
      city: "Minneapolis",
      state: "MN",
      country: "US"
    },
    contact: {
      booking_email: "booking@website.com",
      booking_phone: "555-555-5555",
      band_email: "band@email.com"
    },
    social_media: {
      twitter: "@band",
      instagram: "www.instagram.com/band",
      facebook: "www.facebook.com/band"
    },
    about: "singer songwriter",
    website: "www.band.com",
    image: "https://i.imgur.com/eoyj7UP.jpg",
    geometry: { type: "Point", coordinates: [-93.288504, 44.949367] },
    created_by: {
      username: "ohx",
      _id: ObjectId("5a7e2f995266e5ac6c3cef9d")
    }
  },
  {
    name: "Black Pistol Fire",
    _id: ObjectId("5abe6f995266e5ac6c3cef2d"),
    location: {
      city: "Minneapolis",
      state: "MN",
      country: "US"
    },
    contact: {
      booking_email: "booking@website.com",
      booking_phone: "555-555-5555",
      band_email: "band@email.com"
    },
    social_media: {
      twitter: "@band",
      instagram: "www.instagram.com/band",
      facebook: "www.facebook.com/band"
    },
    about: "singer songwriter",
    website: "www.band.com",
    image: "https://i.imgur.com/eoyj7UP.jpg",
    geometry: { type: "Point", coordinates: [-93.288504, 44.949367] },
    created_by: {
      username: "hammer",
      _id: ObjectId("5a82398ab4fd467c7743f0c9")
    }
  },
  {
    name: "Billy Raffoul",
    _id: ObjectId("5a82888ab4fd4623d743fff7"),
    location: {
      city: "Minneapolis",
      state: "MN",
      country: "US"
    },
    contact: {
      booking_email: "booking@website.com",
      booking_phone: "555-555-5555",
      band_email: "band@email.com"
    },
    social_media: {
      twitter: "@band",
      instagram: "www.instagram.com/band",
      facebook: "www.facebook.com/band"
    },
    about: "singer songwriter",
    website: "www.band.com",
    image: "https://i.imgur.com/eoyj7UP.jpg",
    geometry: { type: "Point", coordinates: [-93.288504, 44.949367] },
    created_by: {
      username: "hammer",
      _id: ObjectId("5a82398ab4fd467c7743f0c9")
    }
  }
];
