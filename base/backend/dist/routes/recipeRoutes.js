"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { getAllRecipes } = require('../controllers/recipesController');
const router = express_1.default.Router();
router.get('/', getAllRecipes);
router.get('/:id');
module.exports = router;
