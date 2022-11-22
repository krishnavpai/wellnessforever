const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task: { type: String, required: true },
    completed: { type: Boolean, default: false },
}, 
{ timestamps: true });
export default mongoose.models.Task || mongoose.model('Task', taskSchema);
