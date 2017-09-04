import { Injectable } from '@angular/core';


import { Jsonp } from '@angular/http';
import 'rxjs/Rx'; // Map

@Injectable()
export class PeliculasService {

  private apikey:string = '76c9895620074176eadb298b6ef38ad7';
  private urlMoviedb:string = 'https://api.themoviedb.org/3';

  constructor( private jsonp: Jsonp ) { }


  getCatelera() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate( hasta.getDate() + 7);


    let desdeStr = `${ desde.getFullYear() }-${ desde.getMonth() + 1 }-${ desde.getDate() }`;
    let hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth() + 1 }-${ hasta.getDate() }`;

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}=&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
      .map( res => res.json());
  }

  getPopulares() {
    console.log('populares');
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
      .map( res=> res.json());
  }

  getPopularesKids() {
    console.log('populares kids');
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
      .map( res=> res.json());
  }

  buscarPelicula( texto:string ) {

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
      .map( res=> res.json());
  }

  getMovie(idx: string) {

    let url = `${ this.urlMoviedb }/movie/${idx}?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
      .map( res=> res.json());

  }

}
