import express from "express";
import db from "../config/database.js"
import mysql from "mysql"
import { createPesan } from "../controllers/pesan.js";
const pool = mysql.createPool(db);


const router = express.Router();

router.post('/', createPesan)

export default router;