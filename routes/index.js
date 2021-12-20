import express from "express";
import db from "../config/database.js"
import mysql from "mysql"
import verifyToken from "../middleware/verifyToken.js"
import { acsess, createPesan } from "../controllers/pesan.js";
const pool = mysql.createPool(db);


const router = express.Router();
router.get('/', acsess)
router.post('/', verifyToken, createPesan)

export default router;