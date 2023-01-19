const express = require('express');
const app = express();
var cors = require('cors');
const { connection } = require("./Config/db");
const PORT = process.env.PORT || 8000;

const { SigninRouter } = require('./Routes/Signin.routes');
const { SignupRouter } = require('./Routes/Signup.routes');
const { authentication } = require('./Middleware/Authentication');
app.use(express.json());

app.use(cors());
require("dotenv").config();
app.get('/', (req, res) =>{
    res.send(" Welcome to Homepage")
})
app.use("/signup", SignupRouter);
app.use("/signin", SigninRouter);
app.listen(PORT,async () => {
    try{
        await Connection
        console.log('Connected To DB Successfully')
    }catch(err){
        console.log('Connection to DB is not Established')
        console.log(err)
    }
    console.log("Listening to the PORT",PORT)
})