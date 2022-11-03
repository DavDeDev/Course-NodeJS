const authorize = (req, res, next) => {
  console.log("authorizing...");
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "john", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
module.exports = authorize;

