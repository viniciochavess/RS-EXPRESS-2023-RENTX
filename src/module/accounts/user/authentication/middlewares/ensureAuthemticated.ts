import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
interface IPayload{
    sub:string
}
export async function ensureAuthemticated(request:Request, response:Response, next:NextFunction){
    const authHeards = request.headers.authorization
    if (!authHeards) throw new Error("tokken inválido")
    const [_, token] = authHeards.split(' ')
    

    try{
        const {sub} = verify(token, "lkajsdkjaksjdlkajsdkajsd") as IPayload
        next()
    }catch(error){
        throw new Error("tokken inválido")
    }
   
    
    
}