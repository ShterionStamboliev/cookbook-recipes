const Recipe = require('../models/recipeModel');
import mongoose from 'mongoose';
import { Request, Response } from 'express';
import { RecipeProps } from '../models/recipeModel';

const createRecipe = async (req: Request, res: Response) => {
    const { recipeTitle, recipeDescription, recipePreptime } = req.body;

    try {
        
    } catch (error) {
        
    }
}

const getSingleRecipe = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: "Could not find such recipe. Try again."
        })
    };

    const recipe: RecipeProps = await Recipe
}

const getAllRecipes = async (req: Request, res: Response) => {
    res.json({
        "msg": "hello"
    })
}

module.exports = {
    getAllRecipes
}