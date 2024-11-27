import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GfFormGroupInterface } from '@generafi/gf-form-main/lib/models/gf-form-group';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.scss']
})
export class FormMainComponent {

  formConfig: GfFormGroupInterface[] = [];

  basicForm: FormGroup  = this.fb.group({});;

  constructor(public httpService:ApiService,private fb: FormBuilder){}

  ngOnInit(){
    this.buildFormDevis()
  }
  
  buildFormDevis() {
    this.formConfig = []; // Clear existing form config

    // if (this.isNumDevisVisible) {
    this.pushFormDevis({
      label: 'Numéro de devis',
      isRequired: true,
      type: 'text',
      name: 'numDevis',
      validators: [Validators.required]
    });

    

  //   <gf-autocomplete
  //   #inputAc
  //   [endPoint]="
  //     currentPage === 'Devis' ||
  //     currentPage === 'DevisToCommande' ||
  //     currentPage === 'Commande'
  //       ? 'tiers/clientsProspectsSome'
  //       : 'tiers/clientsSome'
  //   "
  //   [modeAC]="1"
  //   [httpService]="httpService"
  //   endPointAjout="tiers/ClientAC"
  //   attributAddName="raisonSociale"
  //   formControlName="client"
  //   (selectedChange)="getReglementsEvent.emit($event)"
  //   style="width: 100%"
  //   (keydown)="stopPropagation.emit($event)"
  //   (createdDefaultValue)="getDefaultCreatedValueClient.emit($event)"
  //   [createdItemValue]="createdItemValue"
  // ></gf-autocomplete>

    this.pushFormDevis({
      label: 'Projet',
      isRequired: true,
      type: 'select',
      name: 'projet',
      validators: [],
      data : [
        {label:'pr 1',value:1},
        {label:'pr 2',value:2},{label:'pr 1',value:1},
        {label:'pr 2',value:2},{label:'pr 1',value:1},
        {label:'pr 2',value:2},{label:'pr 1',value:1},
        {label:'pr 2',value:2},{label:'pr 1',value:1},
        {label:'pr 2',value:2},{label:'pr 1',value:1},
        {label:'pr 2',value:2}
      ],
      filtredKey: 'value',
      optionLabel : 'label',
      optionValue : 'value'
    });

    this.pushFormDevis({
      label: 'Date devis',
      isRequired: true,
      type: 'date',
      name: 'dateDevis',
      validators: [],
      value:new Date()
    });

    this.pushFormDevis({
      label: 'Conditions de paiement',
      isRequired: true,
      type: 'select',
      name: 'conditionPaiement',
      optionValue:"id",
      optionLabel : "designation",
      validators: [Validators.required],
      placeholder : "  "
    });

    

    this.pushFormDevis({
      label: 'Liste de prix',
      isRequired: true,
      type: 'select',
      name: 'listePrixId',
      optionValue:"id",
      optionLabel:"designation",
      filtredKey : "designation",
      validators: [Validators.required],
      placeholder : "  "
    });

    this.pushFormDevis({
      label: 'Date devis',
      isRequired: true,
      type: 'textarea',
      name: 'dateDevis',
      validators: [],
      value:''
    });

  }

  pushFormDevis(objet:GfFormGroupInterface){
    this.formConfig.push(objet)
  }

}
