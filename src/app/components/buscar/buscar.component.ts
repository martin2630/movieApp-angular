import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  buscar: string;
  peliculas: any;

  constructor(private _peliculasService: PeliculasService,
              private _activatedRoute: ActivatedRoute
  ) {
    this.buscar = '';
    this._activatedRoute.params.subscribe(
      parametros => {
        if (parametros['texto']) {
          this.buscar = parametros['texto'];
          this.buscarPelicula();
        }

      }
    );
  }


  buscarPelicula() {
    if (this.buscar.length == 0 ) {
      return;
    }

    this._peliculasService.buscarPelicula(this.buscar).subscribe(
      response => {
        console.log(response.results);
       this.peliculas = response.results;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
