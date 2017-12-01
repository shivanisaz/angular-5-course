import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allow = false;
	newServerStatus = 'Not Created';
	serverCreated = false;

  constructor() { 
  	setTimeout(()=>{
  		this.allow = true;
  	},2000);
  }

  ngOnInit() {
  }

  createNewServer() {
  	this.newServerStatus = 'Yay! Created';
  	this.serverCreated = true;
  }

}
