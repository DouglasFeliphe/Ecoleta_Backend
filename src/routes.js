"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
<<<<<<< HEAD
=======
var multer_1 = __importDefault(require("multer"));
var multer_2 = __importDefault(require("../config/multer"));
>>>>>>> d97917b0154fe5bbede89af38e1384c86caabf68
var PointsController_1 = __importDefault(require("./controllers/PointsController"));
var ItemsController_1 = __importDefault(require("./controllers/ItemsController"));
var itemsController = new ItemsController_1.default();
var pointsController = new PointsController_1.default();
var routes = express_1.default.Router();
<<<<<<< HEAD
=======
var upload = multer_1.default(multer_2.default);
// const upload = multerConfig
>>>>>>> d97917b0154fe5bbede89af38e1384c86caabf68
// listar todos os itens
routes.get('/items', itemsController.index);
// listar pontos de coleta específicos
routes.get('/points', pointsController.index);
// mostrar ponto de coleta espeçífico
routes.get('/points/:id', pointsController.show);
<<<<<<< HEAD
routes.post('/point', pointsController.create);
=======
routes.post('/point', upload.single('image'), pointsController.create);
>>>>>>> d97917b0154fe5bbede89af38e1384c86caabf68
exports.default = routes;
