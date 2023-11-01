const jwt =  require("jsonwebtoken");
const secretKey = 'yourSecretKey';

 const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');


  if (!token) {
    return res.status(401).send({ error: "Authentication Failed" });
  }

  try {
    const isTokenVerified = jwt.verify(token, secretKey);

    if (!isTokenVerified) {
      return res.status(401).send({ error: "Unauthorized" });
    }
  } catch (error) {
    return res.status(401).send(error);
  }

  return next();
};

module.exports = verifyToken

// const jwt = require('jsonwebtoken');
// const secretKey = 'yourSecretKey';

// const verifyToken = (req, res, next) => {
//     const token = req.header('Authorization');
//     console.log(token)

//     if (!token) {
//         return res.status(401).json({ message: 'Unauthorized: Token is missing' });
//     }

//     try {
//         jwt.verify(token, secretKey);
//         // Token is valid; proceed to the next middleware or route handler.
//         next();
//     } catch (error) {
//         return res.status(401).json({ message: 'Unauthorized: Invalid token' });
//     }
// }

// module.exports = verifyToken;
