const events = require("./events");
const users = require("./users");
const venues = require("./venues");
const artists = require("./artists");
const mongoose = require("mongoose");
const EventModel = require("./models/model.event");
const UserModel = require("./models/model.user");
const VenueModel = require("./models/model.venue");
const ArtistModel = require("./models/model.artist");
const CronJob = require("cron").CronJob;

// drop all existing documents
const collections = [EventModel, UserModel, VenueModel, ArtistModel];

// func to add hours to date object
Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + h * 60 * 60 * 1000);
  return this;
};

const init = async () => {
  // delete existing mocks
  const deleteExistingCollections = arr => {
    console.log("Deleting existing collections.");
    return new Promise((resolve, reject) => {
      let count = 0;
      arr.forEach(collection => {
        collection.remove({}, (err, writeOpResult) => {
          if (err) console.log(err);
          if (writeOpResult.ok === 1) {
            count++;
            console.log(
              `Deleted ${collection.name}: ${count}/${
                collections.length
              }\nNumber of records: ${writeOpResult.n}`
            );
            count === collections.length && resolve(true);
          }
        });
      });
    });
  };

  const deleted = await deleteExistingCollections(collections);

  if (deleted) {
    console.log("Collections deleted.");
  }

  console.log("Hydrating venues.");
  // insert all venues into database collection
  VenueModel.insertMany(venues, err => {
    if (err) {
      console.log(err);
    }
  });

  // get current date/time
  const now = new Date();

  const updateEventDates = file => {
    // iterate through events file and update datetimes
    // then convert to iso date string
    return file.map(event => {
      event.datetime = now.addHours(1).toISOString();
      return event;
    });
  };

  console.log("Updating event dates.");

  // update event dates to current + 4 hours
  const latestEvents = updateEventDates(events);

  console.log("Hydrating events.");

  // insert all events into database events collection
  try {
    const eventStatus = await EventModel.insertMany(latestEvents);
    if (eventStatus) {
      console.log("Events hydrated.");
    }
  } catch (err) {
    console.log(err);
  }

  console.log("Hydrating users.");
  // insert all users into database users collection
  const allUsers = await users();
  UserModel.insertMany(allUsers, err => {
    if (err) {
      console.log(err);
    }
  });

  console.log("Hydrating artists.");
  // insert all users into database events collection
  ArtistModel.insertMany(artists, err => {
    if (err) {
      console.log(err);
    }
  });

  console.log("Completed.");
  setTimeout(() => process.exit(), 5000);
};

console.log(
  `Connection URI: ${process.env.DB_URI}\nMongoDB Ready State: ${
    mongoose.connection.readyState
  }`
);

const connectToDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, () => {})
    .then(() => {
      console.log("Starting initialization scripts.");
      init();
    })
    .catch(err => {
      console.log(
        "\x1b[35m%s\x1b[0m",
        `\n\n*******DATABASE CONNECTION FAILURE*******\nRetrying database connection.\n${err}\n\n`
      );
      setTimeout(() => connectToDatabase(), 3000);
    });
};

connectToDatabase();

const job = new CronJob({
  cronTime: "00 00 11 * * *",
  onTick: function() {
    connectToDatabase();
  },
  start: true,
  timeZone: "America/Chicago"
});
