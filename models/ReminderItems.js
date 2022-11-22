const mongoose = require('mongoose');

const ReminderItemsSchema = new mongoose.Schema({
    reminderType: { type: String},
    reminderName: { type: String},
    reminderDose: { type: String},
    reminderDateTime: { type: String},
    reminderFrequency: { type: String},
    reminderDuration: { type: String},
    reminderDescription: { type: String },
    reminderStatus: { type: String },
},
{timestamps: true});
mongoose.models = {};
export default mongoose.model('ReminderItems', ReminderItemsSchema);

