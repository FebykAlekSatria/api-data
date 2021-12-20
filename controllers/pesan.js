import Pesan from "../models/pesan.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const createPesan = async (req, res) => {
    try {
        await Pesan.create(req.body);
        res.json({
            "message": "Create Data",
            body: req.body
        });
    } catch (error) {
        res.json({ message: error.message })
    }

}
export const acsess = async (req, res) => {
    const token = jwt.sign('febyk', process.env.SECRET_KEY)
    res.header('auth_token', token).json({
        message: 'acsess',
        validation: 0,
        auth_token: token,
    })
}