"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var articleController_1 = __importDefault(require("./articleController"));
var router = express_1.default.Router();
//newController.index
router.get('/create', articleController_1.default.createNewArticlePage);
router.post('/store', articleController_1.default.storeArticle);
router.get('/:id/edit', articleController_1.default.editArticleById);
router.put('/:slug', articleController_1.default.updateArticle);
router.get('/:slug', articleController_1.default.getDetailBySlugPage);
router.delete('/:slug', articleController_1.default.deleteArticle);
exports.default = router;
