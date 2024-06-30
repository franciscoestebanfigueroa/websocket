
import { WebSocketServer } from "ws";

export class ServiceWebSocketWeb{

private static serverSinglenton:ServiceWebSocketWeb;
public readonly  wss : WebSocketServer;

private constructor(server:any,path:any){
     this.wss=new WebSocketServer({server:server,path:path})
}




static initServer(server:any,path:any){
    if(ServiceWebSocketWeb.serverSinglenton)return console.log('ya hay una instancia de wss')
    ServiceWebSocketWeb.serverSinglenton=new ServiceWebSocketWeb(server,path);
    console.log('se creo una nueva instancia de wss')
    

}


static get getServerWss():ServiceWebSocketWeb{

return ServiceWebSocketWeb.serverSinglenton;
}


}
