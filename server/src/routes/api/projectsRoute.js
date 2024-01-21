import express from 'express';

const router = express.Router();

import projectController from '../../controllers/projectController'


router.post('/projects', projectController.create)

router.get('/projects', projectController.getAll)

router.get('/projects/q', projectController.getAll)

router.get('/projects/:id', projectController.getOne)

router.put('/projects/:id', projectController.update)

router.delete('/projects/:id', projectController.delete)


export default router;