import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specifications.routes";
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'
import "reflect-metadata";
import "./database"
import { usersRoutes } from "./routes/users.routes";
const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/categories',categoriesRoutes)
app.use('/specifications', specificationRoutes)
app.use("/users",usersRoutes)

app.get('/ping',(request,response)=>{
    response.json({
        response:'pong'
    })
})

app.listen(3333,()=>{console.log("server is running http://localhost:3333")})