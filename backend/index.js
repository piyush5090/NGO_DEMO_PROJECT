import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import Registrations from "./models/registrations.js";

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on ${process.env.PORT}`)
);

// Multer Setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const upload = multer({ storage: storage });

// Routes

// Add registration 
app.post("/addRegistration", upload.single("resumeURL"), async (req, res) => {
  try {
    const data = req.body;
    data.resumeURL = req.file.filename; 

    console.log("Data to be saved:", data);

    const newRegistration = new Registrations(data);
    const response = await newRegistration.save();

    res.json({ message: "Registration added successfully", response });
  } catch (error) {
    console.error("Error while saving:", error);
    res
      .status(500)
      .json({ message: "Error while adding a new registration", error });
  }
});

// Get all registrations 
app.get("/getAllRegistrations", async (req, res) => {
  try {
    const allRegistrations = await Registrations.find();
    res.status(200).json(allRegistrations);
  } catch (error) {
    res.status(500).json({
      message: "Error while getting all registrations",
      error,
    });
  }
});

// Get a specific application by ID (not used yet)
app.get("/application/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const application = await Registrations.findById(id);
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.status(200).json(application);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error while getting this application",
      error,
    });
  }
});
