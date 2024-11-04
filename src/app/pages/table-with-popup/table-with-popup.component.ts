import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-table-with-popup',
  templateUrl: './table-with-popup.component.html',
  styleUrls: ['./table-with-popup.component.scss']
})
export class TableWithPopupComponent implements OnInit {

  constructor(public httpService:ApiService) { }

  ngOnInit(): void {
  }

}
