
const requestHandler = (req, res) => {

  if (req.url === "/") {
    res.write("Home Page");
    res.end();

  } else if (req.url === "/about") {
    res.write("About Page");
    res.end();

  } else if (req.url === "/contact") {
    res.write("Contact Page");
    res.end();

  } else {
    res.statusCode = 404;
    res.write("404 Page Not Found");
    res.end();
  }
};

module.exports = requestHandler;
