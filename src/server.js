"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var path_1 = __importDefault(require("path"));
var cors_1 = __importDefault(require("cors"));
<<<<<<< HEAD
=======
var dotenv_1 = __importDefault(require("dotenv"));
>>>>>>> d97917b0154fe5bbede89af38e1384c86caabf68
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use('/uploads', express_1.default.static(path_1.default.resolve(__dirname, '..', 'uploads')));
<<<<<<< HEAD
app.listen(3333);
=======
dotenv_1.default.config();
app.listen(process.env.PORT || 3333, function () {
    console.log("Express server listening on port 3333 in " + app.settings.env + " mode");
});
>>>>>>> d97917b0154fe5bbede89af38e1384c86caabf68
