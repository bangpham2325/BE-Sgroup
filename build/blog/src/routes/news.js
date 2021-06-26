"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var newController_1 = __importDefault(require("../app/controllers/newController"));
var router = express_1.default.Router();
//newController.index
router.get('/:slug', newController_1.default.show);
router.get('/', newController_1.default.index);
exports.default = router;
