import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {
  pelicula: any;


  constructor(
              private _peliculasService: PeliculasService,
              private _activatedRoute: ActivatedRoute
  ) {

    this._activatedRoute.params.subscribe(

      parametros => {

          let id = parametros['id'];

          this._peliculasService.getMovie(id).subscribe(
            response => {
              console.log(response);
              this.pelicula = response;
            },
            error => {
              console.log(error);
            }
          );
      },
      error => {
        console.error(error);
      }
    )
  }

  ngOnInit() {
  }

}
