import {Router} from 'express'

export const categoriesRoutes = Router()

const categories = []

categoriesRoutes.post("", (request, response) =>{
    const {name, description} = request.body;

    categories.push({
        id: "1",
        name,
        description
    })

    response.status(201).send()

})


categoriesRoutes.get("", (request, response) =>{

    response.json(categories)
    
})