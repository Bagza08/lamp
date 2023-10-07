import express from "express";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import createTeacher , { userLogin } from "../services/auth.service";
import { PrismaClient } from "@prisma/client";
import { getVideoLink } from "../controllers/YouTubeController";

const db = new PrismaClient();
const router = express.Router();
const cookie = require("cookie");

router.get("/", (_req: Request, res: Response) => {
  res.send("hello Nero from v1");
});

router.get("/video/:videoId", getVideoLink);

router.post("/auth/register", async (req: Request, res: Response) => {
  try {
    const data = req.body;

    console.log("ini reqbody", data);

    const newUser = await createTeacher(data);

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

router.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userLogin(email);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect email or password." });
    }

    const token = jwt.sign(
      {
        userId: user.id,
        name: user.name,
        role: user.role,
        attachment: user.attachment,
      },
      "kuncinyabroh",
      {
        expiresIn: "1h",
      }
    );

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        maxAge: 3600,
        sameSite: "strict",
        path: "/",
      })
    );

    res.status(200).json({ message: "Authentication successful.", user });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while attempting to log in." });
  }
});

export default router;
