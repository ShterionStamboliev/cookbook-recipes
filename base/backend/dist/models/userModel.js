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
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const validator_1 = __importDefault(require("validator"));
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
});
userSchema.method('signUp', function (email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!email || !password) {
            throw Error('All fields are required');
        }
        if (!validator_1.default.isEmail(email)) {
            throw Error('Email is not valid');
        }
        if (!validator_1.default.isStrongPassword(password)) {
            throw Error('Password is not strong enough');
        }
        const isEmailExisting = yield exports.User.findOne({ email });
        if (isEmailExisting) {
            throw Error('Email is already in use');
        }
        const saltRounds = 10;
        const salt = yield bcrypt_1.default.genSalt(saltRounds);
        const hash = yield bcrypt_1.default.hash(password, salt);
        const user = yield exports.User.create({
            email,
            password: hash
        });
        return user;
    });
});
userSchema.method('signIn', function (email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!email || !password) {
            throw Error('Required fields');
        }
        if (!validator_1.default.isEmail(email)) {
            throw Error('Please enter a valid email');
        }
        const user = yield exports.User.findOne({ email });
        if (!user) {
            throw Error('Invalid login credentials');
        }
        const match = yield bcrypt_1.default.compare(password, user.password);
        if (!match) {
            throw Error('Invalid login credentials');
        }
        return user;
    });
});
exports.User = (0, mongoose_1.model)('User', userSchema);
