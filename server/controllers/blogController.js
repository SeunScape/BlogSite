import mongoose from 'mongoose';
import {RecipeSchema} from '../models/model.js'

const Recipe = mongoose.model('Recipe', RecipeSchema);

export const homepage = async(req, res) => {
  try {
    const limitNumber = 3;
    const categories = await Recipe.find({}).limit(limitNumber);
    res.render('index.ejs', {title: 'Template blog- home', categories});
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


export const addNewRecipe = async (req, res) => {
  try {
    const recipesData = req.body;

    const data = await Recipe.insertMany(recipesData);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
