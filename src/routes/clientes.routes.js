import { Router } from 'express'
import { getCliente } from './clientes.controllers.js'
import {createCliente} from './clientes.controllers.js'

const router = Router()

router.post('/clientes', createCliente);

router.get('/clientes/:name/:phone/:age/:zipcode/:married/:income', getCliente);



export default router