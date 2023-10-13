const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
const app = express();
require('dotenv').config();

// Now, you can access your environment variables like this:
const port = process.env.PORT || 3000;;
const databaseUrl = process.env.DATABASE_URL;
const apiKey = process.env.API_KEY;

// Use these variables in your application as needed.
app.use(express.json());
mongoose.connect(databaseUrl).then(()=>{
    console.log('successfully connected with database')
}).catch((err)=>{
    console.error('error in connecting with database',err)
})




app.listen(port, ()=> console.log(`The server is running on port ${port}`))

