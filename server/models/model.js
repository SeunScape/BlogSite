import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RecipeSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a first name'
    },
    image: {
        type: String,
        required: 'insert image'
    }
});

