const expressAsyncHandler = require('express-async-handler')
const User = require("../../models/User");

//Register 

const registeruser = expressAsyncHandler(async (req, res) =>{
    const {email, firstname, lastname, password} = req?.body;
    const userExists = await User.findOne({email});
    if(userExists) throw new Error('User Already exists');
    try {
        //check if user exists
        const user = await User.create({email, firstname, lastname, password})
        res.status(200).json(user);
    } catch (error) {
        res.json(error);
    }
    
});

//fetch all user
const fetchUserCtrl = expressAsyncHandler( async (req, res) => {
    try{
        const user = await User.find({});
        res.json(user);

    }catch(error){
        res.json(error);
    }
})

module.exports = {registeruser, fetchUserCtrl};