const express = require("express");
const app = express();
//Importing the object from data.js
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  //Sending the products array as a response
  //res.json(products);
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProduct);
});

//Get the info of the first product (hard coding each route of the products)
// app.get("/api/products/1", (req, res) => {
//   const singleProduct = products.find((product) => product.id === 1);

//   res.json(singleProduct);
// });

//Instead of hard coding each route of the products, we can use a route parameter:
app.get("/api/products/:productID", (req, res) => {
  //console.log(req);
  //console.log(req.params);
  const { productID } = req.params;

  //IDs are stored as string, NOT numbers, so we have to 'cast' the productID to a number
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  //If the product doesn't exist, we have to set up a 404 error
  if (!singleProduct) {
    return res.send("Product does not exist");
  }

  console.log(singleProduct);
  res.json(singleProduct);
});

//Route parameters can be very complex
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("Hello World");
});

//Query parameters
app.get("/api/v1/query", (req, res) => {
  //console.log(req.query);
  //We are looking for two parameters: search and limit
  const { search, limit } = req.query;
  // ... iterates through the products array and creates a shallow copy of it
  let sortedProducts = [...products];
  console.log(sortedProducts);
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // The request was successful, but there are no items that match the request
    //res.status(200).send("No products matched your search");
    return res.status(200).json({ success: true, data: [] });
    //TODO: if we don't use return, the code will continue to run and we will get an error because we are trying to send a response twice for the same request
  }
  res.status(200).json(sortedProducts);
  //res.send("Hello World");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000…");
});
