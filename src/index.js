const newman = require("newman");
const collection = require("./collection/Booking.collection.json");
const environment = require("./enviroment/Booking Playground.environment.json");

newman.run(
  {
    collection: collection,
    environment: environment,
    reporters: ["cli", "htmlextra"],
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "public/index.html",
        logs: true,
        browserTitle: "Booking API Report",
        title: "Booking Report",
        showEnvironmentData: true,
        showGlobalData: true,
        showFolderDescription: true,
        timezone: "Asia/Ho_Chi_Minh",
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
