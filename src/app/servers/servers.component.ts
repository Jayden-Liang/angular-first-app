import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  
  styles: [`
  .online{
    color: darkblue;
  }
  `]
})

export class ServersComponent implements OnInit {
  serverNum: number = 10;
  serverStatus: string = 'offline'
  allowNewServer = false
  isShow = false
  serverName = 'random'
  servers = [1,2,3,4]
  getServerStatus() {
    return this.serverStatus
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 1000)

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  ngOnInit(): void {
  }
  hanldeAddServer() {
    this.serverStatus = 'add new'
  }
  onUpdateServerName(event: any) {
    console.log(event.target.value)
    this.serverName = (<HTMLInputElement>event.target).value
  }
  getColor() {
    return 'lightblue'
  }

}
