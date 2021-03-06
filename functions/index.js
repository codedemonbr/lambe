const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const fs = require("fs");
const uuid = require("uuid-v4");
const { Storage } = require("@google-cloud/storage");
const storage = new Storage({
    projectId: "lambe-cf1f4",
    keyFilename: "lambe-firebase-key.json", // It will not be send to repository. Generate you own key
});

exports.uploadImage = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        try {
            fs.writeFileSync(
                "/tmp/imageToSave.jpg",
                request.body.image,
                "base64"
            );

            const bucket = storage.bucket("lambe-cf1f4.appspot.com");
            const id = uuid();
            bucket.upload(
                "/tmp/imageToSave.jpg",
                {
                    uploadType: "media",
                    destination: `/posts/${id}.jpg`,
                    metadata: {
                        metadata: {
                            contentType: "image/jpeg",
                            firebaseStorageDownloadTokens: id,
                        },
                    },
                },
                (err, file) => {
                    if (err) {
                        console.log(err);
                        return response.status(500).json({ error: err });
                    } else {
                        const fileName = encodeURIComponent(file.name);
                        const imageUrl =
                            "https://firebasestorage.googleapis.com/v0/b/" +
                            bucket.name +
                            "/o/" +
                            fileName +
                            "?alt=media&token=" +
                            id;
                        return response
                            .status(201)
                            .json({ imageUrl: imageUrl });
                    }
                }
            );
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: error });
        }
    });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
