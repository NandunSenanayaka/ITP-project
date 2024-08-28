const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Use uppercase 'S' for Schema



const nurseSchema = new Schema({
    name: {
        type: String, // data type
        required: true, // validation
    },
    nic: {
        type: String, // data type
        required: true, // validation
    },
    email: {
        type: String, // data type
        required: true, // validation
    },
    phone: {
        type: Number, // data type
        required: true, // validation
    },
    appnumber: {
        type: Number, // data type
        required: true, // validation
    },
    rnumber: {
        type: Number, // data type
        required: true, // validation
    },
    time: {
        type: String, // data type
        required: true, // validation
    },
    diseases: {
        type: String, // data type
        required: true, // validation
    },
    discription: {
        type: String, // data type
        required: true, // validation
    }
});

module.exports = mongoose.model(
    "NurseModel", // collection name
    nurseSchema // schema name
);
