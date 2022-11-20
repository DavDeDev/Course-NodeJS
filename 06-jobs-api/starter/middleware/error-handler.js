const { CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    // If the error is already registered we will use those values, if not we gonna set a generic one
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong try again later",
  };

  // ! After we add the customError
  // if (err instanceof CustomAPIError) {
  //   return res.status(err.statusCode).json({ msg: err.message });
  // }

  if (err.name === "ValidationError") {
    // this is triggered because of wrong input
    console.log(Object.values(err.errors));
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
    customError.statusCode = 400;
  }

  if (err.name === "CastError") {
    //This is triggered when the _id has the wrong length
    customError.msg = `No item found with id: ${err.value}`;
    customError.statusCode = 404;
  }

  if (err.code && err.code === 11000) {
    //! if the error exist and it's the one of email already registered

    //? Object.keys give an array of the keys in the JSON
    customError.msg = `Duplicate value entered for ${
      Object.keys(err.keyValue)[0]
    } field, please choose another value`;
    customError.statusCode = 400;
  }
  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
