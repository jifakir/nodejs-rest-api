const User = require('../models/user');

const getUsers = async (req, res, next) => {
    
    const users = await User.find();
    if(!users){
        res.status(404).json({message: 'User does not found'});
        next();
    }
    res.json({users});
    next();
};

const getUserById = async (req, res, next) => {
    const uid = req.params.uid;
    console.log(uid);

    try{
        const user = await User.findById(uid);
        if(!user){
            res.status(404).json({message: 'User does not found by provided id'});
            next()
        }
        res.json({user});
    }catch (error){
        res.status(404).json({ message: error });
    }
    next();
};

const createUser = async (req, res, next) => {

    console.log("Name", req.body);

    const {name, address, phone, email, password} = req.body;

    const createdUser = new User({
        name,
        address,
        phone,
        email,
        password
    });

    try{
        const existedUser = await User.findOne({email});
        if(existedUser){
            res.status(402).json({message: 'User already exist.'});
            next();
        };
        const newUser = await createdUser.save();
        res.status(201).json({newUser});
    }catch(error){
        res.status(401).json({message: 'New user creation failed. Please, try again. ',
        error})
    }
};

exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.createUser = createUser;