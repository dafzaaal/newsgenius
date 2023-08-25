import { Router } from "express";
import { insertUser } from "../database/mysql.js";

const router = Router();

router.post("/", async (req, res) => {
    const {fname, lname, username, password} = req.body;
    insertUser(fname, lname, username, password);
    res.send("User Successfully Created!")
});

export default router;