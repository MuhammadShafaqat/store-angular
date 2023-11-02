const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const verifyToken = require('./_helpers/middleware');
const app = express();

app.use(cors());
require('dotenv').config();

// Now, you can access your environment variables like this:
const port = process.env.PORT || 3000;;
const databaseUrl = process.env.DATABASE_URL;
const apiKey = process.env.API_KEY;
const secretKey = process.env.SECRET_KEY;

// Use these variables in your application as needed.
app.use(express.json());


//Routes 
const authRoutes = require('./routers/auth');
const userRoutes = require('./routers/user');
const categoryRoutes = require('./routers/category');

//
app.use('/auth', authRoutes);
app.use('/users', userRoutes)
app.use('/categories',categoryRoutes)

mongoose.connect(databaseUrl).then(()=>{
    console.log('successfully connected with database')
}).catch((err)=>{
    console.error('error in connecting with database',err)
})

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  });

app.listen(port, ()=> console.log(`The server is running on port ${port}`))

