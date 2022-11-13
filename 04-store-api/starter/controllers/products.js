const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  //Testing an error in an async function!
  //throw new Error("async error handling test");

  const products = await Product.find({ price: { $gt: 100 } })
    .sort("price")
    .select("name price");

  res.status(200).json({ nbHits: products.length, products });
};

const getAllProducts = async (req, res) => {
  //We have to destruct the query object from the request object
  const { featured, company, name, sort, fields, numericFilters } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  // ! Name
  if (name) {
    // $options:"i" is to make the search case insensitive
    queryObject.name = { $regex: name, $options: "i" };
  }

  // ! Price
  if (numericFilters) {
    //We translate the symbols in the URL to the MongoDB operators
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /(\b(>|>=|=|<|<=)\b)/g;
    let filters = numericFilters.replace(
      regEx,
      //If there is a match, we replace it with the MongoDB operator
      (match) => `-${operatorMap[match]}-`
    );
    console.log(filters);
    //We split the string into an array
    const options = ["price", "rating"];
    // this is why we put the hyphen in the regex
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    }); 
  }

  console.log(queryObject);
  let result = Product.find(queryObject);
  //! Sort
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  }
  // We can sort as default
  else {
    result = result.sort("createdAt");
  }

  //! Fields
  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }

  //! Pagination
  // Doing so we can pass the number of fields we want to display
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);
  //! We have 23 items, and if we want to display 10 items per page, we have 3 pages (10 + 10 + 3 items per page)
  // Putting the await when we get the final result
  const products = await result;
  res.status(200).json({ nbHits: products.length, products });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
