import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async(req, res) =>{
   try {
    const {fullName, username, password, confirmPassword, gender} = req.body;
    if(password !== confirmPassword){
        return res.status(400).json({error:"password didn't match"})
    }
    const user = await User.findOne({username});
    if(user){
        return res.status(400).json({error:"user already exists"});
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password,salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
        fullName,
        username,
        password : hashedpassword,
        gender,
        profilePic : gender == "male" ? boyProfilePic : girlProfilePic,
    })
    

    if(newUser){
            generateTokenAndSetCookie(newUser, res);
            await newUser.save();
            res.status(201).json({
            _id : newUser._id,
            fullName : newUser.fullName,
            username : newUser.username,
            profilePic : newUser.profilePic,
        });
    }
    else{
        res.status(400).json({error:"Invalid user data"});
    }



   } catch (error) {
      console.log("error in singup", error.message);
      res.status(500).json({error:"Internal server error"});
   }
};

export const login = async (req, res) =>{
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isCorrectPassword = await bcrypt.compare(password, user?.password || "");

        if(!user){
            return res.status(400).json({error:"invalid username"});
        }
        if(!isCorrectPassword){
            return res.status(400).json({error:"invalid password"});
        }

        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id : user._id,
            fullName : user.fullName,
            username : user.username,
            profilePic : user.profilePic,
        });

    } catch (error) {
        console.log("error in login", error.message);
        res.status(500).json({error:"Internal server error"});
    }
};

export const logout = (req, res) =>{
    try {
        res.cookie("jwt","",{maxAge : 0});
        res.status(200).json({message : "logged out successfully !"});
    } catch (error) {
        console.log("error in login", error.message);
        res.status(500).json({error:"Internal server error"});
    }
};