import { Component } from '@angular/core';
import { CallApiService } from './call-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tasks';
  zozData : any ;
  zozRepo :any;

  image :string;
  names :string;
  Bio:string;
  Company:string;
  location:string;
  Folwrs:number;
  Folwing:number;

  constructor(private serv:CallApiService){
   
    //  zoz ApiInfo 
    this.serv.callAPI().subscribe(next => {
      this.zozData = next;
      console.log(this.zozData)
      this.image = this.zozData.avatar_url;
      this.names = this.zozData.name;
      this.Bio = this.zozData.bio;
      this.Company = this.zozData.company;
      this.Folwing = this.zozData.following;
      this.Folwrs = this.zozData.followers;
      this.location = this.zozData.location;

      /*************************************/

      // zoz ApiRepo
      this.serv.callApiForRepo().subscribe(res =>{
        this.zozRepo = res ;
        console.log(this.zozRepo);

      })

    })
  };

  ngOnInit() {
    
  }

}
