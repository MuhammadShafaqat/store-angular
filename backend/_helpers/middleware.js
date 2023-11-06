const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.header('Authorization');
    const tokenWithoutBearer = token && token.startsWith('Bearer ') ? token.slice(7) : token;


    console.log(tokenWithoutBearer);

  if (!tokenWithoutBearer) {
    return res.status(401).send({ error: "Authentication Failed" });
  }

  try {
    const isTokenVerified = jwt.verify(tokenWithoutBearer, secretKey);

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
// // require('dotenv').config();
// const secretKey = process.env.SECRET_KEY;



// const verifyToken = (req, res, next) => {
//     const token = req.body.token || req.query.token || req.header('Authorization');
//     const tokenWithoutBearer = token && token.startsWith('Bearer ') ? token.slice(7) : token;


//     console.log(token);

//   if (!token) {
//     return res.status(401).send({ error: "Authentication Failed" });
//   }

//   try {
//     const isTokenVerified = jwt.verify(tokenWithoutBearer, secretKey);

//     if (!isTokenVerified) {
//       return res.status(401).send({ error: "Unauthorized" });
//     }
//   } catch (error) {
//     return res.status(401).send(error);
//   }

//   return next();
// };

// module.exports = verifyToken