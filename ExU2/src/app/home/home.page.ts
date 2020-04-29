import { Pais } from './Pais.module';
import { AmiiboservicesService } from './../amiiboservices.service';
import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  Am:Pais;
  Url='https://coronavirus-19-api.herokuapp.com/countries/';
  constructor(private pais: AmiiboservicesService) {

  }

  NombrePais='';
  ngOnInit(){
    this.searchPais();
    }
    searchPais(){
      const search=encodeURIComponent(this.NombrePais).trim();
      this.Am=this.pais.getAmiibo(this.Url+ search);
      }
}