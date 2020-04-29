import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AmiiboservicesService {
  detalles = {
    country:'',
    cases:'',
    deaths:'',
    recovered: '',
   }

  constructor(public http: HttpClient) { }

  public getAmiibo(Url:string){
    this.http.get(Url).subscribe((data)=>{
      this.detalles.country = data[ 'country' ];
      this.detalles.cases = data[ 'cases' ];
      this.detalles.deaths = data[ 'deaths' ];
      this.detalles.recovered = data[ 'recovered' ]
    })
    return this.detalles;
  }

}
