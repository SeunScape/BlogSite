import express from 'express';
import { homepage, addNewRecipe } from '../server/controllers/blogController.js';
const router = express.Router();

router.get('/', homepage);

router.route('/recipe')
.post(addNewRecipe);

export default router;
