const jwt = require("jsonwebtoken");

const JWT_SECRET = "jobsearch_secret_key_123";

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.send("Access denied ❌ No token provided");
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.send("Invalid token ❌");
  }
};

module.exports = authMiddleware;
