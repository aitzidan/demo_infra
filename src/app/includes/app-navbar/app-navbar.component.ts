import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {

  items: any[];

  constructor(private route:Router) { }
  

  ngOnInit(): void {
    this.items =  [
      {
        label: 'Header',
        icon:'pi pi-fw pi-minus',
        command: () => {
            this.handleRouting('/');
        },
      },
      {
        label: 'Form',
        items: [
            {
                label: 'Form principale',
                icon:'pi pi-fw pi-shield',
                command: () => {
                    this.handleRouting('/form-principale');
                },
            },
            {
                label: 'Form secondaire',
                icon:'pi pi-fw pi-external-link',
                command: () => {
                  this.handleRouting('/form-secondaire');
                },
            }
          ]
      },
      {
        label: 'Example',
        icon:'pi pi-fw pi-star',
        command: () => {
            this.handleRouting('/example');
        },
      },
    ]
  }

  handleRouting(link:any){
    this.route.navigate([link])
  }

}
