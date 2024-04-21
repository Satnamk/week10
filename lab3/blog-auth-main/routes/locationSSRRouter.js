// // router.js

const express = require("express");
const router = express.Router();
// controller functions
const blogSSR = require("../controllers/locationSSRController");
const verifyToken = require("../middlewares/requireAuthSSR")

// require auth for all routes
router.use(verifyToken)

// SSR
// End1: Route to render index.html with locations using EJS
router.get("/", blogSSR.renderLocations);
// End2: Define a route to render the addlocation.ejs view
router.get("/addlocation", blogSSR.renderForm);
// End3:Route to add  location using EJ
router.post("/addlocation", blogSSR.addLocation);
// Define a route to render the singlelocation.ejs view
router.get("/single-location/:id", blogSSR.renderLocation);
// Define a route to delete singlelocation
router.delete("/single-location/:id", blogSSR.deleteLocation);
// Define a route to update single location.ejs
router.put("/single-location/:id", blogSSR.updateLocation);
// Define location to update
router.get("/single-location/update/:id", blogSSR.renderUpdateLocation);

module.exports = router;