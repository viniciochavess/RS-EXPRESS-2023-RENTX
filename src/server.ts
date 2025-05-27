import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use('/categories',categoriesRoutes)

app.get('/',(req,res)=>{
    res.json({
        hi:"oi"
    })
})

app.listen(3333,()=>{console.log("server is running ")})