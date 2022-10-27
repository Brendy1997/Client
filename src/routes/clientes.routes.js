import { Router } from 'express'
import { getCliente } from './clientes.controllers.js'
import {createCliente} from './clientes.controllers.js'

const router = Router()

router.get('/clientes', getCliente);

router.post('/clientes', createCliente);

export default router