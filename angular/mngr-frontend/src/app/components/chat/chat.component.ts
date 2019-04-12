import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client/dist/socket.io.js';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  private socket = io()
  constructor() { }

  ngOnInit() {
  }



}
