import express from 'express';

const router = express.Router();

import SubCategoriesController from '../../controllers/subCategoriesController';

router.post('/sub-categories', SubCategoriesController.create)
router.get('/sub-categories', SubCategoriesController.getAll)
router.get('/sub-categories/:id', SubCategoriesController.getOne)
router.put('/sub-categories/:id', SubCategoriesController.update)
router.delete('/sub-categories/:id', SubCategoriesController.delete)

export default router;