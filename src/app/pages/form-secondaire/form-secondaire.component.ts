import { Component, OnInit } from '@angular/core';
import { AutoCompleteComponent } from '../auto-complete/auto-complete.component';
import { TableWithPopupComponent } from '../table-with-popup/table-with-popup.component';

@Component({
  selector: 'app-form-secondaire',
  templateUrl: './form-secondaire.component.html',
  styleUrls: ['./form-secondaire.component.scss']
})
export class FormSecondaireComponent implements OnInit {

  tabs : any = []
  constructor() { }

  ngOnInit(): void {
    this.tabs = [
      { 
        name: 'Lignes de facture', 
        active : true,
        component : AutoCompleteComponent,
        componentInputs: {
        },
        componentOutputs: {
        }
      },      
      {
        name: 'Commandes', 
        active : false,
        component : TableWithPopupComponent,
        componentInputs: {
        },
        componentOutputs: {
        }
      },
    ];
  }

}
