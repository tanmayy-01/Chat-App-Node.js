const mongoose = require("mongoose");

const connect = async () => {
    await mongoose.connect("mongodb://localhost/chatapp");   //we can connect to the mongoDB server
} 

module.exports = connect;