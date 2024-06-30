import { createServer } from "http";
import express from "express"
import { envs } from "../config/envs";
import { WebSocketServer} from "ws"


export class Servers{

    
    
    static serverHttp(){
        const app = express()   
        
        const serverHttp=createServer(app);
        const serverWss= new WebSocketServer({server:serverHttp,path:"/ws"})  

          serverWss.on("connection",(ws)=>{
                ws.on("error",console.error);

                ws.on("mensaje",(data)=>{
                    console.log(data)
                });

                ws.send("hola mundo en ws")


          })

        serverHttp.listen(envs.PORT,()=>{
            console.log("Run Server " + envs.PORT)
        })

    }


}