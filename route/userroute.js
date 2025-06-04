import express from 'express';
import { login, signup } from '../controller/usercontroller.js'; // ✅ include .js extension

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;
