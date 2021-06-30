"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLOUDINARY_API_SECRECT = exports.CLOUDINARY_API_KEY = exports.CLOUDINARY_NAME = exports.DB_CONNECTION = exports.COOKIE_SECRET = exports.PORT = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = process.env.PORT || 3000;
exports.COOKIE_SECRET = process.env.COOKIE_SECRET || 'bang';
exports.DB_CONNECTION = process.env.DB_CONNECTION || 'mongodb://localhost:27017/Article';
exports.CLOUDINARY_NAME = process.env.CLOUDINARY_NAME || 'bangpham';
exports.CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || '837869445163677';
exports.CLOUDINARY_API_SECRECT = process.env.CLOUDINARY_API_SECRECT || 'dulA88W9xEtQNBMSkE5PVKqIc88';
