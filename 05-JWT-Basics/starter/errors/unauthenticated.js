const CustomAPIError = require("./custom-error");
const { StatusCode } = require("http-status-codes");

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    //this.statusCode = 401;
    //!Instead of manually putting in the status code, we can use the status code from the http-status-codes package
    this.statusCode = StatusCode.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
