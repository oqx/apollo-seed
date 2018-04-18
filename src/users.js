const { Types } = require("mongoose");
const { ObjectId } = Types;
const bcrypt = require("bcryptjs");

module.exports = () => {
  return bcrypt.hash("helloworld", 10).then(password => {
    return [
      {
        _id: ObjectId("5a7e2f995266e5ac6c3cef9d"),
        bands: [
          {
            name: "Kihndyn Peters",
            id: ObjectId("5a7e2f995266e5ac6c3cef2f")
          },
          {
            name: "Handsome Ghost",
            id: ObjectId("5a82888ab4fd467c7743fff7")
          }
        ],
        venues: [
          {
            name: "First Avenue",
            id: ObjectId("63fab5aae19ae9b35d5378ad")
          },
          {
            name: "James Ballentine VFW Post 246",
            id: ObjectId("d8a64150afa516743c028e42")
          },
          {
            name: "7th Street Entry",
            id: ObjectId("d8a64150afa516743c028e42")
          }
        ],
        updated_at: "2018-02-09T23:32:41.909Z",
        username: "ohx",
        email: "viamemo@gmail.com",
        password: password,
        version: 1
      },

      /* 2 */
      {
        _id: ObjectId("5a82398ab4fd467c7743f0c9"),
        bands: [
          {
            name: "Black Pistol Fire",
            id: ObjectId("5abe6f995266e5ac6c3cef2d")
          },
          {
            name: "Billy Raffoul",
            id: ObjectId("5a82888ab4fd4623d743fff7")
          }
        ],
        venues: [
          {
            name: "The Pourhouse",
            id: ObjectId("5a82398ab4fd467c7743f666")
          },
          {
            name: "Nutsack Lounge",
            id: ObjectId("5a82398ab4fd467c77432e26")
          }
        ],
        updated_at: "2018-02-13T01:04:10.070Z",
        isRegistered: false,
        username: "hammer",
        email: "nickhammer@hammertime.com",
        password: password,
        version: 1
      },

      /* 3 */
      {
        _id: ObjectId("5a82421f2b6dcb808aff46ac"),
        bands: [],
        venues: [
          {
            name: "Paperhouse",
            id: ObjectId("5a7e2f99522345ac6c3ceff4")
          }
        ],
        updated_at: "2018-02-13T01:40:47.929Z",
        username: "koop",
        email: "koop@kk.com",
        password: password,
        version: 1
      }
    ];
  });
};
