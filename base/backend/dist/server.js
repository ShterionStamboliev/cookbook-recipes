"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 4000;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
