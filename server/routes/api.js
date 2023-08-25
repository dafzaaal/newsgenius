import { Router } from "express";
import {checkUser} from "../database/mysql.js";
import cors from 'cors';

const router = Router();
router.use(cors());

router.post('/', async (req, res) => {
    const {username, password} = req.body;
    const queryData = await checkUser(username, password);
    res.send(queryData);
});


export default router;