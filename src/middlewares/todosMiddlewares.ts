import type { Response,Request,NextFunction } from "express";
const checkSecretKey = (req:Request,res:Response,next:NextFunction)=>{
    const secret_api_key = req?.headers['secret-api-key']
    const original_secret_api_key = process.env.SECRET_API_KEY
    if(secret_api_key!=original_secret_api_key){
        return res.status(403).send({message:"Wrong Api Key"})
    }
    next()
}
export {checkSecretKey}