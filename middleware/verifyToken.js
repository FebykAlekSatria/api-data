import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export default function verifyToken(req, res, next) {
    const token = req.header('auth-token')
    if (!token) return res.json('Accses Danied')
    try {
        var verifed = jwt.verify(token, process.env.SECRET_KEY)
        req.user = verifed
        next()
    } catch (error) {
        res.json({
            message: 'Invalid Token',
        })
    }
}

