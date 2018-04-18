const { Types } = require("mongoose");
const { ObjectId } = Types;

module.exports = [
  {
    name: "The Pourhouse",
    _id: ObjectId("5a82398ab4fd467c7743f666"),
    location: {
      address: "10 S 5th St #11",
      city: "Minneapolis",
      state: "MN",
      zip: 55402,
      country: "US",
      geometry: {
        type: "Point",
        coordinates: [-93.2714257, 44.9791073]
      }
    },
    contact: {
      booking_email: "booking@pourhouse.com",
      booking_phone: "612-555-5555"
    },
    social_media: {
      twitter: "@pourhouse",
      instagram: "www.instagram.com/pourhouse",
      facebook: "www.facebook.com/pourhouse"
    },
    about: "Pourhouse is your mom",
    website: "www.pourhouse.com",
    image: "https://i.imgur.com/pVC1SpS.jpg",
    created_at: "2018-02-06T16:49:50.504Z",
    updated_at: "2018-02-06T16:49:50.504Z",
    created_by: {
      username: "hammer",
      _id: ObjectId("5a82398ab4fd467c7743f0c9")
    }
  },
  {
    name: "First Avenue",
    _id: ObjectId("63fab5aae19ae9b35d5378ad"),
    location: {
      address: "701 N 1st Ave",
      city: "Minneapolis",
      state: "MN",
      zip: 55402,
      country: "US",
      geometry: { type: "Point", coordinates: [-93.276081, 44.978266] }
    },
    contact: {
      booking_email: "booking@firstavenue.com",
      booking_phone: "612-555-5555"
    },
    social_media: {
      twitter: "@firstavenue",
      instagram: "www.instagram.com/firstavenue",
      facebook: "www.facebook.com/firstavenue"
    },
    about: "First ave is your mom",
    website: "www.firstavenue.com",
    image: "https://i.imgur.com/pVC1SpS.jpg",
    created_at: "2018-02-06T16:49:50.504Z",
    updated_at: "2018-02-06T16:49:50.504Z",
    created_by: {
      username: "ohx",
      _id: ObjectId("5a7e2f995266e5ac6c3cef9d")
    }
  },
  {
    name: "Nutsack Lounge",
    _id: ObjectId("5a82398ab4fd467c77432e26"),
    location: {
      address: "38348 Minneapolis St",
      city: "Minneapolis",
      state: "MN",
      zip: 55402,
      country: "US",
      geometry: { type: "Point", coordinates: [-93.2428869, 45.0791802] }
    },
    contact: {
      booking_email: "booking@nutsacklounge.com",
      booking_phone: "612-555-5555"
    },
    social_media: {
      twitter: "@nutsacklounge",
      instagram: "www.instagram.com/nutsacklounge",
      facebook: "www.facebook.com/nutsacklounge"
    },
    about: "nutsack is your mom",
    website: "www.nutsacklounge.com",
    image: "https://i.imgur.com/pVC1SpS.jpg",
    created_at: "2018-02-06T16:49:50.504Z",
    updated_at: "2018-02-06T16:49:50.504Z",
    created_by: {
      username: "hammer",
      _id: ObjectId("5a82398ab4fd467c7743f0c9")
    }
  },
  {
    name: "James Ballentine VFW Post 246",
    _id: ObjectId("5a79dcaebdc9ca2f56f24a36"),
    location: {
      address: "2916 Lyndale Ave S",
      city: "Minneapolis",
      state: "MN",
      zip: 55408,
      country: "US",
      geometry: { type: "Point", coordinates: [-93.288504, 44.949367] }
    },
    contact: {
      booking_email: "booking@vfw.com",
      booking_phone: "612-555-5555"
    },
    social_media: {
      twitter: "@vfw",
      instagram: "www.instagram.com/vfw",
      facebook: "www.facebook.com/vfw"
    },
    about: "vfw is your mom",
    website: "www.vfw.com",
    image: "https://i.imgur.com/pVC1SpS.jpg",
    created_at: "2018-02-06T16:49:50.504Z",
    updated_at: "2018-02-06T16:49:50.504Z",
    created_by: {
      username: "ohx",
      _id: ObjectId("5a7e2f995266e5ac6c3cef9d")
    }
  },
  {
    name: "7th Street Entry",
    _id: ObjectId("d8a64150afa516743c028e42"),
    location: {
      address: "2916 Lyndale Ave S",
      city: "Minneapolis",
      state: "MN",
      zip: 55408,
      country: "US",
      geometry: { type: "Point", coordinates: [-93.288504, 44.949367] }
    },
    contact: {
      booking_email: "booking@firstavenue.com",
      booking_phone: "612-555-5555"
    },
    social_media: {
      twitter: "@firstavenue",
      instagram: "www.instagram.com/firstavenue",
      facebook: "www.facebook.com/firstavenue"
    },
    about: "firstavenue is your mom",
    website: "www.firstavenue.com",
    image: "https://i.imgur.com/pVC1SpS.jpg",
    created_at: "2018-02-06T16:49:50.504Z",
    updated_at: "2018-02-06T16:49:50.504Z",
    created_by: {
      username: "ohx",
      _id: ObjectId("5a7e2f995266e5ac6c3cef9d")
    }
  },
  {
    name: "Paperhouse",
    _id: ObjectId("5a7e2f99522345ac6c3ceff4"),
    location: {
      address: "3608 23rd Ave S",
      city: "Minneapolis",
      state: "MN",
      zip: 55407,
      country: "US",
      geometry: { type: "Point", coordinates: [-93.2650108, 44.977753] }
    },
    contact: {
      booking_email: "booking@paperhouse.com",
      booking_phone: "612-555-5555"
    },
    social_media: {
      twitter: "@paperhouse",
      instagram: "www.instagram.com/paperhouse",
      facebook: "www.facebook.com/paperhouse"
    },
    about: "paperhouse is your mom",
    website: "www.paperhouse.com",
    image: "https://i.imgur.com/pVC1SpS.jpg",
    created_at: "2018-02-06T16:49:50.504Z",
    updated_at: "2018-02-06T16:49:50.504Z",
    created_by: {
      username: "ohx",
      _id: ObjectId("5a7e2f995266e5ac6c3cef9d")
    }
  }
];
