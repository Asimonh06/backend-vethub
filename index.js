import express from "express";
import connectDB from "./src/config/db.js";
import morgan from "morgan";
import cors from "cors"
import ProductRoutes from "./src/routes/Product.routes.js";
import CartRoutes from "./src/routes/Cart.routes.js";
import { version } from "mongoose";
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
/* Conexión a la base de datos */
connectDB();

/* middlewares */
app.use(express.json());
app.use(morgan("dev"));
app.use(cors())

/* puertos */
const PORT = process.env.PORT || 5000;

//Configuracion de swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API DE PRODUCTOS',
      version: '1.0.0',
      description: 'Documentación de la API para el manejo de productos'
    },
    servers: [
      {
        url: `https://backend-vethub.vercel.app/:${PORT}`,
      }
    ]
  },
  apis: ['./src/routes/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/* rutas */
app.use("/api/products", ProductRoutes);
app.use("/api/carts", CartRoutes);



/* inicializando */
app.listen(PORT, () => {
  console.log("Servidor funcionado en el puerto " + PORT);
});
