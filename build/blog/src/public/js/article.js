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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var imageFile = document.getElementById("image");
imageFile.addEventListener('change', function (e) { return __awaiter(void 0, void 0, void 0, function () {
    var form, response, src, _a, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                form = new FormData();
                form.append("image", imageFile.files[0]);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 7, , 8]);
                return [4 /*yield*/, fetch('http://localhost:3000/upload', {
                        method: 'post',
                        body: form
                    })];
            case 2:
                response = _b.sent();
                if (!!response.ok) return [3 /*break*/, 3];
                alert('Upload failed');
                return [3 /*break*/, 6];
            case 3: return [4 /*yield*/, response.json()];
            case 4:
                src = (_b.sent()).src;
                _a = document.querySelector("#preview_img");
                return [4 /*yield*/, src];
            case 5:
                _a.src = _b.sent();
                console.log(src);
                return [2 /*return*/];
            case 6: return [3 /*break*/, 8];
            case 7:
                err_1 = _b.sent();
                console.log("loi roi" + err_1);
                return [2 /*return*/];
            case 8: return [2 /*return*/];
        }
    });
}); });
document.getElementById("Article").addEventListener('submit', function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var title, content, src, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                event.preventDefault();
                title = document.getElementById('title').value;
                content = document.getElementById('content').value;
                src = document.getElementById('preview_img').src;
                return [4 /*yield*/, fetch('http://localhost:3000/articles/store', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            title: title,
                            content: content,
                            src: src
                        }),
                    })];
            case 1:
                response = _a.sent();
                console.log(response);
                if (!response.ok) {
                    alert('Create fail!!!');
                }
                else {
                    location.href = '/home';
                    alert('Register success');
                    return [2 /*return*/];
                }
                return [2 /*return*/];
        }
    });
}); });
