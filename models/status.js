const mongoose = require('mongoose')
const Schema = mongoose.Schema



const statusSchema = new Schema({
        name: {
            type: String,
        },
        symptoms: [
            {
                type: String
            }
        ],
        description: {
            type: String
        }
    }
)

const Status = mongoose.model('Status', statusSchema);

module.exports = Status;