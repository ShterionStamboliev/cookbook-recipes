const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
import { Request, Response } from "express";

type ReqParams = {
    email: string,
    password: string,
}

function tokenGen(_id: string) {
    return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: '1d' });
}

async function userLogin(req: Request<ReqParams>, res: Response) {
    const { email, password } = req.body;

}