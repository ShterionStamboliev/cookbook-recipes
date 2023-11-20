"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const recipeSchema = new mongoose_1.Schema({
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
module.exports = (0, mongoose_1.model)('Recipes', recipeSchema);
