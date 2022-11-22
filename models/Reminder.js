const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
    
    type :{type: String},
    medicine: {type: String},
    dosage: {type: String},
    dateTime:{type: String},
    frequency: {type: String},
    duration: {type: String},
    description: {type: String},
    status: {type: String},
    

},
{timestamps: true});
mongoose.models = {};
export default mongoose.model('Reminder', reminderSchema);