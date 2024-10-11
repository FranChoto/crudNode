import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userController = {

    async register(req, res) {
        try{
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({
                fullname: req.body.fullname,
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword
            })
            const response = await newUser.save();
            res.status(201).json({message: "User created", response});
        } catch (err) {
            res.status(500).json({ message: "An error has ocurred", error: err.message });
        }
    },
    async login(req, res) {
        try{
            const response = await User.find().where({email : req.body.email})
            if (response.length > 0) {
                const compare = await bcrypt.compare(req.body.password, response[0].password);
                if(compare) {
                    const token = userController.createToken(response[0]);
                    res.status(200).json({message: "User logged in, token generated", token});
                } else {
                    res.status(401).json({ message: "Wrong password" });
                }
            } else {
                res.status(404).json({ message: "User not found" });
            }

        } catch (err) {
            res.status(500).json({ message: "An error has ocurred", error: err.message });
        }
    },
    createToken(payload) {
        const user = {
            id: payload._id,
            username: payload.username,
            email: payload.email
        }
        return jwt.sign(user, process.env.SECRET, { expiresIn: "1h" });
    }

};

export default userController;