const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const Student = require("./model/student");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// Connect Database
connectDB();
/* ================= CREATE STUDENT ================= */
app.post("/students", async (req, res) => {
  try {
    // Create new student
    const newStudent = await Student.create(req.body);

    res.status(201).json({
      message: "Student created successfully",
      data: newStudent,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/* ================= GET ALL STUDENTS ================= */

app.get("/students", async (req, res) => {
  try {
    // Get all students
    const students = await Student.find();

    res.json(students);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/* ================= GET SINGLE STUDENT ================= */

app.get("/students/:id", async (req, res) => {
  try {
    // Find student using ID
    const student = await Student.findById(req.params.id);

    // Check student exists or not
    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/* ================= UPDATE STUDENT ================= */

app.put("/students/:id", async (req, res) => {
  try {
    // Update student
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    res.json({
      message: "Student updated successfully",
      data: updatedStudent,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/* ================= DELETE STUDENT ================= */

app.delete("/students/:id", async (req, res) => {
  try {
    // Delete student
    await Student.findByIdAndDelete(req.params.id);

    res.json({
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
