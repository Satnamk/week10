// // router.js

const express = require("express");
const router = express.Router();
// controller functions
const blogSSR = require("../controllers/eventSSRController");
const verifyToken = require("../middlewares/requireAuthSSR")

// require auth for all routes
router.use(verifyToken)

// SSR
// End1: Route to render index.html with events using EJS
router.get("/", blogSSR.renderEvents);
// End2: Define a route to render the addevent.ejs view
router.get("/addevent", blogSSR.renderForm);
// End3:Route to add  event using EJ
router.post("/addevent", blogSSR.addEvent);
// Define a route to render the singleevent.ejs view
router.get("/single-event/:id", blogSSR.renderEvent);
// Define a route to delete singleevent
router.delete("/single-event/:id", blogSSR.deleteEvent);
// Define a route to update single event.ejs
router.put("/single-event/:id", blogSSR.updateEvent);
// Define event to update
router.get("/single-event/update/:id", blogSSR.renderUpdateEvent);

module.exports = router;