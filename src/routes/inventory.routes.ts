import {Router} from 'express'
const router = Router();

import {getInventory, createProduct} from '../controller/inventory.controller'

router.route('/')
    .get(getInventory)
    .post(createProduct);

export default router;