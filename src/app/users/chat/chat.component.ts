import { Component, OnInit } from '@angular/core';
import {Client} from '@stomp/stompjs'
import * as SockJS from 'sockjs-client'
import { Message } from 'src/app/entity/message';
import { TokenStorageService } from 'src/app/service/token-storage.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
private client:Client;
connecte:boolean = false;
currentUser:any;
 date:any;
 ecrire:string;
messages:Message[] = [];
message:Message = new Message();
  constructor(private token:TokenStorageService) { }

  ngOnInit(): void {
    this.client = new Client();
    this.currentUser = this.token.getUser();

    //asssign sockJs 
    this.client.webSocketFactory = () =>{
      return new SockJS("http://localhost:8081/DariTn/chat-websocket");
    }
    this.client.onConnect = (frame)=>{
      console.log('connecté :'+this.client.connected+' : '+frame);
      this.connecte=true;

       this.client.subscribe('/chat/message',e=>{
         let message:Message = JSON.parse(e.body) as Message;
         
         message.date = new Date(message.date);

        if(!this.message.color && message.type =='nv_user' && this.message.username == message.username){
          this.message.color = message.color;
        }

        this.messages.push(message);
        console.log(message.text);
        });

        this.client.subscribe('/chat/ecrire', e=>{
          this.ecrire =e.body;
          setTimeout(()=>this.ecrire = '',3000)
        });

        this.message.type = "nv_user";
        this.client.publish({destination : '/app/message',body: JSON.stringify(this.message)});

     }

    this.client.onDisconnect = (frame)=>{
      console.log('desconnecté :'+!this.client.connected+' : '+frame);
      this.connecte=false;
    }

  }


connecter():void{

  this.client.activate();

}
deconnecter():void{
  this.client.deactivate();

}
envoyerMessage():void{
  this.message.type="MESSAGE";
  this.client.publish({destination : '/app/message',body: JSON.stringify(this.message)});
  this.message.text = '';
}
ecrireEvent():void{
  this.client.publish({destination : '/app/ecrire',body: JSON.stringify(this.message.username)});

}

}
