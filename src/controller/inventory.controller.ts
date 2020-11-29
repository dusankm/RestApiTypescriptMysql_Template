import{Request,Response}from 'express'

import {connect} from '../database'
import {Product} from '../interface/inventory'

export async function getInventory(req:Request, res:Response):Promise<Response>{
    const conn = await connect();
    const inventory = await conn.query('SELECT * FROM product');
    return res.json(inventory[0]);
}

export async function createProduct(req:Request, res:Response):Promise<Response>{
    const newProduct: Product = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO product SET ?',[newProduct]);
    return res.json({
        status:'200',message:'ok',
    })
}