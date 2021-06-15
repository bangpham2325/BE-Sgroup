"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ArticleController_1 = __importDefault(require("../app/controllers/ArticleController"));
var router = express_1.default.Router();
//newController.index
router.get('/create', ArticleController_1.default.create);
router.post('/store', ArticleController_1.default.store);
router.get('/:id/edit', ArticleController_1.default.edit);
router.put('/:slug', ArticleController_1.default.update);
router.get('/:slug', ArticleController_1.default.show);
router.delete('/:slug', ArticleController_1.default.delete);
exports.default = router;
