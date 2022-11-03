const express = require("express");
//Takes care of the routing
const router = express.Router();

//! We move all the logic to the controllers folder
//let {people} = require("../data");

//import the controllers
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

//GET reads data
//! We have to remove the api/people from the route, because we already have that in the app.js, and we start from there
//! We move the callback function to the controllers folder
// router.get("/", getPeople);

// //POST creates data, and the BODY (which was optional) of the http request is the data
// router.post("/", createPerson);

// router.post("/postman", createPersonPostman);

// //TODO:r If we have a list, and we want to update/delete/get a specific item, we should use a path parameter!

// // To update data
// router.put("/:id", createPerson);

// router.delete("/:id", deletePerson);

//!!! Another way to set up the routes in fewer lines of code (chaining the methods)

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;
