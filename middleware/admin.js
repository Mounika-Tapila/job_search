const jwt = require("jsonwebtoken");

const JWT_SECRET = "jobsearch_secret_key_123";

const adminMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.send("Access denied ❌");

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (decoded.role !== "admin") {
      return res.send("Admins only ❌");
    }

    req.user = decoded;
    next();
  } catch (err) {
    res.send("Invalid token ❌");
  }
};

module.exports = adminMiddleware;
