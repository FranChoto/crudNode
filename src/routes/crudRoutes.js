import { Router } from 'express';
import crudController from '../controllers/crudController.js';
import { checkToken } from '../middlewares/checkToken.js';

const router = Router();

router.get('/', crudController.getAll);
router.get('/getByName', crudController.getByName);
router.post('/postOne',checkToken, crudController.postOne);
router.get('/getById/:id', crudController.getOneById);
router.delete('/deleteOne/:id',checkToken, crudController.deleteOne);
router.put('/updateOne/:id',checkToken, crudController.updateOne);

export default router;