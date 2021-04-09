import express from 'express'
import { celebrate, Joi } from 'celebrate'

import multer from 'multer';
import multerConfig from '../config/multer';

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const itemsController = new ItemsController()
const pointsController = new PointsController()

const routes = express.Router()
const upload = multer(multerConfig)
// const upload = multerConfig

// listar todos os itens
routes.get('/items', itemsController.index)

// listar pontos de coleta específicos
routes.get('/points', pointsController.index)

// mostrar ponto de coleta espeçífico
routes.get('/points/:id', pointsController.show)

routes.post('/point',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required()
        })
    }, {
        abortEarly: false //validar todos os campos ao mesmo tempo
    }),
    pointsController.create)


export default routes