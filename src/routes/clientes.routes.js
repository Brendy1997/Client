import { Router } from 'express'

import {createCliente} from './clientes.controllers.js'

const router = Router()



router.post('/clientes', createCliente);

export default router