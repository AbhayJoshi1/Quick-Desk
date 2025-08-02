const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    issue: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'open'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Ticket', ticketSchema);
