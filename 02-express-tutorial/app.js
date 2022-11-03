const express = require("express");
const app = express();

//require the module
let people = require("./routes/people");
let auth = require("./routes/auth");

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

//Now we have a base route
app.use("/api/people", people);
app.use("/login", auth);

// app.post("/login", (req, res) => {
//   const { name } = req.body;
//   if (name) {
//     return res.status(200).send(`Welcome ${name}`);
//   }

//   res.status(401).send("Please Provide Credentials");
// });

//TODO: We moved this to the routes folder
// //GET reads data
// app.get("/api/people", (req, res) => {
//   res.status(200).json({ success: true, data: people });
// });

// //POST creates data, and the BODY (which was optional) of the http request is the data
// app.post("/api/people", (req, res) => {
//   //if the name is not in the body, return an error
//   const { name } = req.body;
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: "please provide name value" });
//   }
//   res.status(201).json({ success: true, person: name });
// });

// app.post("/api/people/postman", (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: "please provide name value" });
//   }
//   res.status(201).json({ success: true, data: [...people, name] });
// });

// //TODO:r If we have a list, and we want to update/delete/get a specific item, we should use a path parameter!

// // To update data
// app.put("/api/people/:id", (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   //console.log(id, name)

//   const person = people.find((person) => person.id === Number(id));

//   if (!person) {
//     return res
//       .status(404)
//       .json({ success: false, msg: `no person with id ${id}` });
//   }
//   const newPeople = people.map((person) => {
//     if (person.id === Number(id)) {
//       person.name = name;
//     }
//     return person;
//   });
//   res.status(200).json({ success: true, data: newPeople });
// });

// app.delete("/api/people/:id", (req, res) => {
//   const person = people.find((person) => person.id === Number(req.params.id));
//   if (!person) {
//     return res
//       .status(404)
//       .json({ success: false, msg: `no person with id ${req.params.id}` });
//   }
//   const newPeople = people.filter(
//     (person) => person.id !== Number(req.params.id)
//   );
//   return res.status(200).json({ success: true, data: newPeople });
// });

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
