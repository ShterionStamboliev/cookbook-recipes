"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const recipeRoutes = require('./routes/recipeRoutes');
const userRoutes = require('./routes/userRoutes');
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((req, res, next) => {
    next();
});
app.use('/api/recipes', recipeRoutes);
app.use('/api/user', userRoutes);
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => {
    app.listen(process.env.APP_PORT, () => {
        console.log(`Server is running on port ${process.env.APP_PORT}`);
    });
});
