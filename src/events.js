const { Types } = require("mongoose");
const { ObjectId } = Types;

module.exports = [
  {
    _id: new ObjectId("5a79dcaebdc9ca2f56f24a33"),
    title: "Pourhouse Bangorang",
    description: "come watch bands and drink beer and party mate",
    artists: [
      {
        name: "Kihndyn Peters",
        _id: new ObjectId("5a7e2f995266e5ac6c3cef2f")
      },
      {
        name: "Handsome Ghost",
        _id: new ObjectId("5a82888ab4fd467c7743fff7")
      }
    ],
    datetime: "2018-02-16T13:20:10.661Z",
    venue: new ObjectId("5a82398ab4fd467c7743f666"),
    type: "Concert",
    created_at: "2018-02-06T16:49:50.504Z",
    created_by: {
      username: "hammer",
      _id: new ObjectId("5a82398ab4fd467c7743f0c9")
    }
  },
  {
    _id: new ObjectId("5a79dcaebdc9ca2f56f24a34"),
    title: "Cool bands live",
    description: "come watch bands and drink beer and party mate",
    artists: [
      {
        name: "Black Pistol Fire",
        _id: new ObjectId("5abe6f995266e5ac6c3cef2d")
      },
      {
        name: "Billy Raffoul",
        _id: new ObjectId("5a82888ab4fd4623d743fff7")
      }
    ],
    datetime: "2018-02-16T21:20:10.661Z",
    venue: new ObjectId("63fab5aae19ae9b35d5378ad"),
    type: "Concert",
    created_at: "2018-02-06T16:49:50.504Z",
    created_by: {
      username: "ohx",
      _id: new ObjectId("5a7e2f995266e5ac6c3cef9d")
    }
  },
  {
    _id: new ObjectId("5a79dcaebdc9ca2f56f24a35"),
    title: "Amazing Nutsack Night",
    description: "come watch bands and drink beer and party mate",
    artists: [
      {
        name: "Billy Raffoul",
        _id: new ObjectId("5a82888ab4fd4623d743fff7")
      }
    ],
    datetime: "2018-02-17T05:20:10.661Z",
    venue: new ObjectId("5a82398ab4fd467c77432e26"),
    type: "Concert",
    created_at: "2018-02-06T16:49:50.504Z",
    created_by: {
      username: "hammer",
      _id: new ObjectId("5a82398ab4fd467c7743f0c9")
    }
  },
  {
    _id: new ObjectId("5a79dcaebdc9ca2f56f24a31"),
    title: "VFW Singaling",
    description: "come watch bands",
    artists: [
      {
        name: "Black Pistol Fire",
        _id: new ObjectId("5abe6f995266e5ac6c3cef2d")
      },
      {
        name: "Billy Raffoul",
        _id: new ObjectId("5a82888ab4fd4623d743fff7")
      }
    ],
    datetime: "2018-02-17T13:20:10.661Z",
    venue: new ObjectId("5a79dcaebdc9ca2f56f24a36"),
    type: "Concert",
    created_at: "2018-02-06T16:49:50.504Z",
    created_by: {
      username: "ohx",
      _id: new ObjectId("5a7e2f995266e5ac6c3cef9d")
    }
  },
  {
    _id: new ObjectId("5a79dcaebdc9ca2f56f24a37"),
    title: "Small room bonanza",
    description: "come watch bands",
    artists: [
      {
        name: "Handsome Ghost",
        _id: new ObjectId("5a82888ab4fd467c7743fff7")
      },
      {
        name: "Billy Raffoul",
        _id: new ObjectId("5a82888ab4fd4623d743fff7")
      }
    ],
    datetime: "2018-02-17T21:20:10.661Z",
    venue: new ObjectId("d8a64150afa516743c028e42"),
    type: "Concert",
    created_at: "2018-02-06T16:49:50.504Z",
    created_by: {
      username: "ohx",
      _id: new ObjectId("5a7e2f995266e5ac6c3cef9d")
    }
  },
  {
    _id: new ObjectId("5a79dcaebdc9ca2f56f24a39"),
    title: "Pperhouse wolf dog",
    description: "come watch bands and drink beer and party mate",
    artists: [
      {
        name: "Black Pistol Fire",
        _id: new ObjectId("5abe6f995266e5ac6c3cef2d")
      },
      {
        name: "Billy Raffoul",
        _id: new ObjectId("5a82888ab4fd4623d743fff7")
      }
    ],
    datetime: "2018-02-18T13:20:10.661Z",
    venue: ObjectId("5a7e2f99522345ac6c3ceff4"),
    type: "Concert",
    created_at: "2018-02-06T16:49:50.504Z",
    created_by: {
      username: "koop",
      _id: new ObjectId("5a82421f2b6dcb808aff46ac")
    }
  }
];
