const express = require("express");
const app = express();
const tasks = require("./routes/tasks");


// middleware 

// routes
app.get("/hello", (req, res) => {
  res.send("Hello World");
});


// This middleware serves to read incoming json requests
app.use(express.json());
app.use("/api/v1/tasks", tasks);

const port = 3000;

app.listen(port,console.log(`Server is listening on port ${port}....`));
