"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Recipe = require('../models/recipeModel');
const mongoose_1 = __importDefault(require("mongoose"));
const createRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { recipeTitle, recipeDescription, recipePreptime } = req.body;
    try {
    }
    catch (error) {
    }
});
const getSingleRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: "Could not find such recipe. Try again."
        });
    }
    ;
    const recipe = yield Recipe;
});
const getAllRecipes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        "msg": "hello"
    });
});
module.exports = {
    getAllRecipes
};
