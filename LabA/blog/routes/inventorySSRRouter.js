// // router.js

const express = require("express");
const router = express.Router();
// controller functions
const blogSSR = require("../controllers/inventorySSRController");
const verifyToken = require("../middlewares/requireAuthSSR")

// require auth for all routes
router.use(verifyToken)

// SSR
// End1: Route to render index.html with inventories using EJS
router.get("/", blogSSR.renderInventories);
// End2: Define a route to render the addinventory.ejs view
router.get("/addinventory", blogSSR.renderForm);
// End3:Route to add  inventory using EJ
router.post("/addinventory", blogSSR.addInventory);
// Define a route to render the singleinventory.ejs view
router.get("/single-inventory/:id", blogSSR.renderInventory);
// Define a route to delete singleinventory
router.delete("/single-inventory/:id", blogSSR.deleteInventory);
// Define a route to update single inventory.ejs
router.put("/single-inventory/:id", blogSSR.updateInventory);
// Define inventory to update
router.get("/single-inventory/update/:id", blogSSR.renderUpdateInventory);

module.exports = router;