const express = require('express');
const app = express();

// Load variables from .env
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// Middleware
// app.use(express.json())

//TaskRoute
const taskRoutes = require('./routes/task') 






app.use('/api/v1/tasks', taskRoutes)




// Start server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
