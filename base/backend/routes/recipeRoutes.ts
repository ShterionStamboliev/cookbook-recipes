import express from 'express';
const { getAllRecipes } = require('../controllers/recipesController')

const router = express.Router();

router.get('/', getAllRecipes);
router.get('/:id', );

module.exports = router;