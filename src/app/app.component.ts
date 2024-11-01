import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
// import { GfFormGroupInterface } from '@generafi/gf-form-main/lib/models/gf-form-group';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() basicForm: FormGroup;
  // formConfig: GfFormGroupInterface[] = [];

  constructor( private fb: FormBuilder,  public httpService:ApiService) {
  }

  /*buildFormDevis() {
    this.formConfig = []; // Clear existing form config

    // if (this.isNumDevisVisible) {
    this.pushFormDevis({
      label: 'Numéro de devis',
      isRequired: true,
      type: 'text',
      name: 'numDevis',
      validators: [Validators.required]
    });

    this.pushFormDevis({
      label:"Client",
      name: 'client',
      type: 'autoComplete',
      validators: [Validators.required],
      isHaveLink : true,
      autocomplete: {
        endPoint: 'tiers/clientsProspectsSome',
        httpService: this.httpService,
        endPointAjout : "tiers/ClientAC",
        attributAddName : "raisonSociale",
      }
    })

    this.pushFormDevis({
      label: 'Projet',
      isRequired: true,
      type: 'select',
      name: 'projet',
      validators: [],
      filtredKey: 'value',
      disabled : false,
    });

    this.pushFormDevis({
      label: 'Date devis',
      isRequired: true,
      type: 'date',
      name: 'dateDevis',
      validators: [],
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
      // data: this.listeOfPrices,
      placeholder : "  "
    });

  }
  pushFormDevis(objet){
    this.formConfig.push(objet)
  }
  ngOnInit(){
    this.buildFormDevis()
  }*/
}
