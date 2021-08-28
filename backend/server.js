const express = require("express"); //take express dependency from package.json
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070; //assign 8070 port or any other available port.

app.use(cors());
app.use(bodyParser.json());

//connecting database
const URL = process.env.MONGODB_URL;

//configuratons for the mongoDB
//mogosse.connect(URL, options)
mongoose.connect(URL, {
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
}).catch(error => console.log(error));

mongoose.Promise = global.Promise;

//create connection
const connection = mongoose.connection;
//open this event once to connect to the database
connection.once("open", () => {
    console.log("MongoDB Connection Success!!");
});

//access route file
const studentRoute = require("../backend/routes/student.routes");

//http://localhost: 8070/student -> loading students.js file
app.use("/students", studentRoute);

//run in the port
app.listen(PORT, () => {
    console.log('Server is up and running on port number:', PORT);
})