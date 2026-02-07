const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
{
    name: {
      type: String,
      required: [true, "Please provide a task name"],
      trim: true,
      minlength: [3, "Task name must be at least 3 characters"],
      maxlength: [100, "Task name cannot exceed 100 characters"],
    },
    taskName: {
        type: String,
        required: [true, "Please provide a task name"],
        trim: true,
        minlength: [3, "Task name must be at least 3 characters"],
        maxlength: [100, "Task name cannot exceed 100 characters"],
    }, 
    completed: {    
        type: Boolean,
        default: false
    }   
},
{ timestamps: true }
);

module.exports = mongoose.model('Task', taskSchema);
