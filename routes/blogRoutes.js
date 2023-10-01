import express from 'express';
import { homepage, addNewRecipe, exploreCategories } from '../server/controllers/blogController.js';
const router = express.Router();

router.get('/', homepage);

router.get('/categories', exploreCategories);
router.route('/recipe')
.post(addNewRecipe);

export default router;
