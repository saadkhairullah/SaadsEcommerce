const UserInfo = require('../models/usermodel')
const jwt = require('jsonwebtoken')

// this is a middleware that will be used in routes that require authentication
//*******  not used will be used when working with sensitive routes *************************
// way to implement: go into the routes file that requires auth and do router.use(requireAuth) after importing requireAuth

const requireAuth = async (req, res, next) => {

// see if authorization exists in headers
const {authorization} = req.headers

if (!authorization){
   return res.status(404).json({error: "Authorization token not found, please Log in"})
}
try{


// split token from the headers string and verify it
const token = authorization.split(' ')[1]

const {_id} = jwt.verify(token, process.env.SECRETSTRING)

req.user = await UserInfo.findOne({_id}).select('_id')

next()

}
catch(error){
    console.log(error)
    res.status(401).json({error: "The authorization token was revoked"})
}
}
module.exports = requireAuth