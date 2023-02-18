const mongoose = require("mongoose");
// example uses following sets to allow db but my error require line 7 to true or false

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.set('useFindAndModify', true);
//mongoose.set('strictQuery', false)
//mongoose.set('strictQuery', false)mongoose.set('useUnifiedTopology', true);
mongoose.set('strictQuery', false)


class Database {
    constructor() {
        this.connect();
    }

    connect(){
// database connection to mongoose where we put password after admin and dtabsae name before ?retryWrites 
mongoose.connect("mongodb+srv://admin:abc@cluster0.9k13acq.mongodb.net/witterClone-registerRoute?retryWrites=true&w=majority")
.then(() => {
    console.log("database connection succesful");
})
.catch((err) => {
    console.log("databse connection error " + err);
})
    }  
}

module.exports = new Database();
