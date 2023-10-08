import mongoose from 'mongoose';
import {RecipeSchema} from '../models/model.js';
import { recipeModelSchema } from '../models/recipeModel.js';

const Recipe = mongoose.model('recipes', RecipeSchema);
const RecipeModel = mongoose.model('recipemodels', recipeModelSchema);

export const homepage = async(req, res) => {
  try {
    const limitNumber = 3;
    const categories = await Recipe.find({}).limit(limitNumber);
    const latest = await RecipeModel.find({}).sort({_id: -1}).limit(limitNumber);
    const thai = await RecipeModel.find({ 'category': 'Thai'}).limit(limitNumber);
    const american= await RecipeModel.find({ 'category': 'American'}).limit(limitNumber);
    const chinese = await RecipeModel.find({ 'category': 'Chinese'}).limit(limitNumber);

    const food = {latest, thai, american, chinese};
    res.render('index.ejs', {title: 'Template blog- home', categories, food});
  }catch(error){
    res.status(500).send({message: error.message || "error occured"})
  }
};

export const exploreCategories = async(req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Recipe.find({}).limit(limitNumber);
    res.render('categories.ejs', {title: 'Template blog- home', categories});
  }catch(error){
    res.status(500).send({message: error.message || "error occured"})
  }
};
// export const addNewRecipe = async (req, res) => {
//   try {
//     const recipesData = req.body;

//     const data = await Recipe.insertMany(recipesData);

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const addNewRecipeData = async (req, res) => {
//   try {
//     const recipesData = req.body;

//     const data = await RecipeModel.insertMany(recipesData);

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const exploreRecipes = async (req, res) => {
  try {
    let recipeId = req.params.id;
    const data = await RecipeModel.findById(recipeId);
    
    if (!data) {
      // Handle the case when the recipe is not found
      return res.status(404).send("Recipe not found");
    }

    res.render('recipe.ejs', { title: 'Template blog- recipesprofile', data });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error occurred" });
  }
};

export const exploreCategoriesById = async (req, res) => {
  try {
    let categoryId = req.params.id;
    const limitNumber = 20;
    const categoryById = await Recipe.find({ 'category': categoryId}).limit(limitNumber);

    
    if (!items) {
      // Handle the case when the recipe is not found
      // return res.status(404).send("Recipe not found");
      console.log('recipe not found')
    }

    res.render('categories.ejs', { title: 'Template blog- recipesprofile', categoryById});
  } catch (error) {
    res.status(500).send({ message: error.message || "Error occurred" });
  }
};