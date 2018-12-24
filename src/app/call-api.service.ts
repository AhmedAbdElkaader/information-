import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  constructor(public http : HttpClient) {}

  callAPI(){

   return this.http.get("https://api.github.com/users/mohammedelzanaty");
  
  }
  callApiForRepo(){

    return this.http.get("https://api.github.com/users/mohammedelzanaty/repos");

  }

}
