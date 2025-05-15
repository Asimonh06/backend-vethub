import express from "express";
import { addProduct, deleteProduct, getProducts } from "../controllers/Product.controller.js";

const router = express.Router();


/**
 * @swagger
 * /api/products:
 *  get:
 *      summary: Obtienes la lista de productos
 *      responses:
 *          200:
 *              description: Lista de productos
 *          400:
 *              description: Error al listar
 */
router.get("/", getProducts)



/**
 * @swagger
 * /api/products/add:
 *  post:
 *      summary: Agrega nuevos productos
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: Arena para gatos
 *                          price:
 *                              type: integer
 *                              example: 26.9
 *                          offert:
 *                              type: boolean
 *                              example: true
 *                          description:
 *                              type: string
 *                              example: Arena para gatos de todas las edades y tamaños
 *                          img:
 *                              type: string
 *                              example: https://oechsle.vteximg.com.br/arquivos/ids/16595133/image-1a1c8e74b6b74a63b8427e04caf1c74a.jpg?v=638336654693370000
 *                      required:
 *                          - name
 *                          - price
 *                          - offert
 *                          - description
 *                          - img
 *      responses:
 *          201:
 *              description: Producto registrado correctamente
 *          400:
 *              description: Error al registrar producto
 * 
 */
router.post("/add", addProduct)



router.delete("/delete/:productId", deleteProduct)

export default router