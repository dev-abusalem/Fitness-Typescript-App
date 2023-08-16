const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URL, ()=>{
    try {
        console.log(" DB connection successfully ")
    } catch (error) {
        console.log(error)
    }
});