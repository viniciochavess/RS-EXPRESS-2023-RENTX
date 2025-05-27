import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use('/categories',categoriesRoutes)

app.get('/ping',(request,response)=>{
    response.json({
        response:'pong'
    })
})

app.listen(3333,()=>{console.log("server is running http://localhost:3333")})