import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public populares: any;
  public cartelera: any;
  public kids: any;

  constructor(private _peliculasService: PeliculasService) {

    this.getCartelera();
    this.getPopulares();
    this.getPopularesKids();

  }

  getCartelera() {

    this._peliculasService.getCatelera().subscribe(

      response => this.cartelera = response.results,
      error => console.error(error)
    );

  }

  getPopulares() {

    this._peliculasService.getPopulares().subscribe(
      response => this.populares = response.results,
      error => console.error(error)
    );

  }

  getPopularesKids() {

    this._peliculasService.getPopularesKids().subscribe(
      response => this.kids = response.results,
      error => console.error(error)
    );

  }

  ngOnInit() {
  }



}
