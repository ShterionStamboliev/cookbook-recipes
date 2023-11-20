import {model, Schema} from 'mongoose';

export interface RecipeProps {
    recipeTitle: string;
    recipeImage?: string;
    recipeDescription: string;
    recipePreptime: string;
    userId: string;
}

const recipeSchema = new Schema<RecipeProps>({
    recipeTitle: {
        type: String,
        required: true
    },
    recipeImage: {
        type: String,
        required: true
    },
    recipeDescription: {
        type: String,
        required: true
    },
    recipePreptime: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('Recipes', recipeSchema);