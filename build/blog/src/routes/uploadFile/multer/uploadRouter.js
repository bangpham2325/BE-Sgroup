"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var uploadModel_1 = __importDefault(require("./uploadModel"));
var uploadController_1 = __importDefault(require("./uploadController"));
router.post('/', uploadModel_1.default.single('image'), uploadController_1.default.uploadSingle);
exports.default = router;
