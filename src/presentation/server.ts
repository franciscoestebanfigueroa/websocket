import { createServer } from "http";
import express, { Request, Response } from "express"
import { envs } from "../config/envs";
import { WebSocketServer} from "ws"
import { ServiceWebSocketWeb } from "../services/services.ws";


export class Servers{

    
    
    static serverHttp(){
        const app = express();
        
        app.get('/',function (req,res){
            
            res.json({data:"server http"})
        });
        
        const serverHttp=createServer(app);
        //const serverWss= new WebSocketServer({server:serverHttp,path:"/ws",})  
           const Wss =  ServiceWebSocketWeb.initServer(serverHttp,'/ws');
            const serverWss=ServiceWebSocketWeb.getServerWss.wss
          serverWss.on("connection",(ws)=>{
                ws.on("error",console.error);

                ws.on('message',(data)=>{
                    console.log(data.toLocaleString())
                });

                ws.send("conectado socket server")


          })

        serverHttp.listen(envs.PORT,()=>{
            console.log("Run Server " + envs.PORT)
        })

    }


}