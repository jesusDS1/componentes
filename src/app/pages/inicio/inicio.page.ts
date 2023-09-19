import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  
})
export class InicioPage implements OnInit {
  componentes: componente[] = [
    {
      icon: 'american-football',
      name: 'Acion sheet',
      redirectTo:'/action-sheet',
    },
    {
      icon: 'appstore',
      name: 'Alert',
      redirectTo:'/aletr',
    },
  ];

  constructor() {}

  ngOnInit() {}
}

interface componente {
  icon:string;
  name:string;
  redirectTo: String;
}
