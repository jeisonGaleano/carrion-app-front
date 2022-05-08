import { Component, OnInit } from '@angular/core';
import { Trm } from './shared/Model/trm';
import { HomeService } from './shared/Service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo: String = 'Taza Representativa del Mercado';
  public trm: Trm;
  constructor(
    private trmService: HomeService
  ) { }

  ngOnInit() {
    this.consultarTrm();
  }


  private consultarTrm(){
    this.trmService.consultar().subscribe(trm =>{
      this.trm = trm;
      console.log(this.trm);
    })
  }
}
