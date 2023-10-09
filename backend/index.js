const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

// Now, you can access your environment variables like this:
const port = process.env.PORT;
const databaseUrl = process.env.DATABASE_URL;
const apiKey = process.env.API_KEY;

// Use these variables in your application as needed.






app.listen(port, ()=> console.log(`The server is running on port ${port}`))

