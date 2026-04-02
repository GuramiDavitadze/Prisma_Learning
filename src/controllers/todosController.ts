import  {type Request,type Response} from 'express'
const getAllData = (req:Request,res:Response)=>{
    res.send({message:"You Get All Data"})
}

export {getAllData}