"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var routes_1 = __importDefault(require("./routes"));
var database_1 = __importDefault(require("./config/database"));
var method_override_1 = __importDefault(require("method-override"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
//const authMidderware = require('./middleware/auth.middleware');
var _a = require('./env'), PORT = _a.PORT, COOKIE_SECRET = _a.COOKIE_SECRET;
//connect db
database_1.default();
var app = express_1.default();
var port = 3000;
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
//Khai báo đường dẫn đến thư mục chứa các template
app.set('views', path_1.default.join(__dirname, 'resources/views'));
//Khai báo templateEngine sử dụng
app.set('view engine', 'pug');
app.get('/user/:id', function (req, res, next) {
    res.send('USER');
});
app.use(method_override_1.default(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));
app.use(cookie_parser_1.default("asasasas"));
//app.use(methodOverride('_method'))
app.use('/', routes_1.default);
app.listen(port, function () {
    console.log("Example app listening at http://localhost:3000");
});
