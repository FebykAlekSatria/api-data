import Pesan from "../models/pesan.js";
export const createPesan = async (req, res) => {
    try {
        await Pesan.create(req.body);
        res.json({
            "message": "Create Question",
            body: req.body
        });
    } catch (error) {
        res.json({ message: error.message })
    }

}