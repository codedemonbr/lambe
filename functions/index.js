const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const fs = require("fs");
const uuid = require("uuid-v4");
const { Storage } = require("@google-cloud/storage");
const storage = new Storage({
    projectId: "lambe-cf1f4",
    keyFilename: "lambe-firebase-key.json", // It will not be send to repository. Generate you own key
});

exports.uploadImage = functions.https.onRequest((request, response) => {});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
