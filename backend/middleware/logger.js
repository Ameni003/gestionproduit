// This function will log every request to our server
const logger = (req, res, next) => {
    // Print the type of request and the URL
    console.log(`${req.method} ${req.url}`);
    // Continue to the next step
    next();
};

module.exports = logger;