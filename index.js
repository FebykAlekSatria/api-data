import express from "express";
import db from "./config/database.js"
import routes from "./routes/index.js"
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log('DATABASE RUNNING');
} catch (error) {
    console.error('CONECTION ERROR', error);
}

app.use(cors());
app.use(express.json())
app.use('/', routes);


app.listen(5000, () => console.log('server running at port 5000'))