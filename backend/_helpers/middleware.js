const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.header('Authorization');
    console.log(token)

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Token is missing' });
    }

    try {
        jwt.verify(token, secretKey);
      //  req.user = decoded;
        // Token is valid; proceed to the next middleware or route handler.
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
}

module.exports = verifyToken;
