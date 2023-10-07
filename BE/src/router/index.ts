import express from "express";
import { Request, Response } from 'express';
import createUser, { userLogin } from "../service/auth.service";
import * as bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
const jwt = require('jsonwebtoken'); // Import library JWT
const cookie = require('cookie');
const db = new PrismaClient();


const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send("ini v1")
})


router.post('/auth/register', async (req: Request, res: Response) => {
    try {
        const data = req.body;

        console.log("ini reqbody", data);

        const newUser = await createUser(data)


        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
});

router.post('/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userLogin(email)

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Incorrect email or password.' });
        }

        const token = jwt.sign({ userId: user.id, name: user.name, role: user.role, attachment: user.attachment }, 'kuncinyabroh', {
            expiresIn: '1h',
        });

        res.setHeader(
            'Set-Cookie',
            cookie.serialize('token', token, {
                httpOnly: true,
                maxAge: 3600,
                sameSite: 'strict',
                path: '/',
            })
        );

        // If authentication is successful, send a success response
        res.status(200).json({ message: 'Authentication successful.', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while attempting to log in.' });
    }
});






export default router;