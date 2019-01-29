
const bcrypt = require('bcryptjs');

passwordProtection = (password) => {
    if(password.length > 11){
        hashed = bcrypt.hashSync(password, 12);
        return hashed;
    } else {
        return res.status(400).json({
            message: "Password must be at least 12 characters long"
        })
    }
}

checkFields = (req, res, next) => {
    const user = req.body;
    if(user.username && user.password){
        next();
    } else if(user.username){
        return res.status(400).json({
            message: "New accounts require a password!"
        })
    } else if(user.password){
        return res.status(400).json({
            message: "New accounts require a username!"
        })
    } else{
        return res.status(400).json({
            message: "New accounts require a username and password!"
        })
    }
}

loginCheck = (req, res, next) => {
    const user = req.body;
    if(user.username && user.password){
        next();
    } else {
        res.status(400).json({
            message: "Invalid username or password."
        })
    }
}

module.exports = {
    passwordProtection, checkFields, loginCheck
}