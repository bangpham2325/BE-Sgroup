"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var NewController_1 = __importDefault(require("../app/controllers/NewController"));
var router = express_1.default.Router();
//newController.index
router.get('/:slug', NewController_1.default.show);
router.get('/', NewController_1.default.index);
exports.default = router;
