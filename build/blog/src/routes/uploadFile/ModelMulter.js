"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path = require('path');
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/tmp/my-uploads');
    },
    filename: function (req, file, cb) {
        var uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});
var upload = multer_1.default({ storage: storage }); //save trên local của server khi dùng multer
exports.default = upload;
