class CustomAPIError extends Error {
  constructor(message) {
    super(message)
    //! We gonna 
    // this.statusCode = statusCode
  }
}

module.exports = CustomAPIError
