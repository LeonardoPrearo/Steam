import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Game} from "../module/game";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http : HttpClient) { }

  getAllGames() : Observable<Game[]>{
    return this.http.get<Game[]>("http://localhost:3000/Games");
  }
}
