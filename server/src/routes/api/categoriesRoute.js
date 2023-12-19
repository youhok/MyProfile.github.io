import express from 'express';

const router = express.Router();


import categoriesController from "../../controllers/categoriesController";


router.post('/categories', categoriesController.create)
// router.get('/categories/search/:id', categoriesController.getAll)
router.get('/categories', categoriesController.getAll)
router.get('/categories/:id', categoriesController.getOne)
router.put('/categories/:id', categoriesController.update)
router.delete('/categories/:id', categoriesController.delete)


export default router;