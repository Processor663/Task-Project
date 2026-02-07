const express = require("express");
const app = express();

// Load variables from .env
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// connectDb
const connectDB = require("./db/task_connect");

// middleware to read JSON body
app.use(express.json());

//TaskRoute
const taskRoutes = require("./routes/task");


const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);











app.use("/api/v1/tasks", taskRoutes);






const serverStart = async () => {
  try {
    // Connect to DB
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting...", error);
    // process.exit(1); // Exit with failure
  }
};

// Start server
serverStart();
