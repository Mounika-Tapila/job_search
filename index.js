require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Job = require("./models/Job");
const AppliedJob = require("./models/AppliedJob"); // ✅ FIXED
const User = require("./models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "jobsearch_secret_key_123";

const authMiddleware = require("./middleware/auth");

// Middleware
app.use(cors());
app.use(express.json());

/* ---------------- DATABASE ---------------- */

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

/* ---------------- HOME ---------------- */

app.get("/", (req, res) => {
  res.send("Job Search Backend Running 🚀");
});

/* ---------------- JOBS ---------------- */

app.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/add-job", async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.send("Job Added Successfully ✅");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/add-sample", async (req, res) => {
  try {
    await Job.insertMany([
      { title: "Frontend Developer", company: "Google", location: "Bangalore" },
      { title: "Backend Developer", company: "Amazon", location: "Hyderabad" },
      { title: "Software Engineer", company: "Microsoft", location: "Pune" },
    ]);

    res.send("Sample Jobs Added ✅");
  } catch (error) {
    res.status(500).send(error);
  }
});

/* ---------------- APPLY JOB ---------------- */

app.post("/apply-job", authMiddleware, async (req, res) => {
  try {
    const { title, company, location } = req.body;

    const newApplication = new AppliedJob({
      title,
      company,
      location,
      userId: req.user.id,
    });

    await newApplication.save();

    res.send({
      message: "Job applied successfully ✅",
      job: newApplication,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

/* ---------------- APPLICATIONS ---------------- */

app.get("/applications", async (req, res) => {
  try {
    const applications = await AppliedJob.find();
    res.json(applications);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* ---------------- AUTH ---------------- */

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) return res.send("User already exists ❌");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword,
    });

    await user.save();

    res.send("User Registered Successfully ✅");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.send("User not found ❌");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.send("Invalid password ❌");

    const token = jwt.sign(
      { id: user._id, username: user.username },
      JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.json({
      message: "Login Successful ✅",
      token,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

/* ---------------- START SERVER ---------------- */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
