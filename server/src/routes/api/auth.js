import express from 'express';

const router = express.Router();

import authControllers from '../../controllers/authController';

import authMiddleware from "../../middleware/auth";


router.post('/auth/register', authControllers.register)

router.post('/auth/login', authControllers.login)

router.post('/auth/logout', authControllers.logout)

router.post('/auth/refresh', authControllers.refresh)

router.get('/auth/user', authMiddleware, authControllers.user)


export default router;