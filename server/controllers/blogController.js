import mongoose from 'mongoose';
import {RecipeSchema} from '../models/model.js'

const Recipe = mongoose.model('Recipe', RecipeSchema);

export const homepage = (req, res) => {
  res.render('index.ejs', {title: 'Template blog- home'});
};

export const addNewRecipe = async(req, res) => {
  const post = new Recipe({
      name: req.body.name, 
      image: req.body.image, 
  }); 
  try {
      let data = await post.save()
      res.status(200).json(data)
  } catch (error) {
      res.status(500).json({ message: error}); 
  }
};


