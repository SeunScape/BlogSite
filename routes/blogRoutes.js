import express from 'express';
import { homepage, exploreCategories,exploreRecipes, exploreCategoriesById} from '../server/controllers/blogController.js';
const router = express.Router();

router.get('/', homepage);

router.get('/categories', exploreCategories);
router.get('/categories/:id', exploreCategoriesById);
router.get('/recipe/:id', exploreRecipes);


router.route('/recipe')
// .post(addNewRecipe);

router.route('/recipedata')
// .post(addNewRecipeData);

export default router;

