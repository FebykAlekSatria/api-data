import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Pesan = db.define('class_ood', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    nama: {
        type: DataTypes.STRING,
    },
    pesan: {
        type: DataTypes.STRING,
    },
    kelas: {
        type: DataTypes.STRING,
    },
    keterangan: {
        type: DataTypes.STRING,
    }
},
    {
        freezeTableName: true,
        timestamps: false
    }
);

export default Pesan;