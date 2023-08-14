import express from "express";
import { login, logout, register } from "../controllers/auth.js";
import cors from 'cors';

const router = express.Router();

router.get('/login', login);

router.post('/register',  register)
router.post('/login', login)
router.post('/logout', logout)

export default router;