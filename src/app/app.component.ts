import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
//import {Chart} from 'chart.js';
//import * as Chart from 'chart.js';
//import 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Linechart=[];
  title = 'dari';
  /* constructor(private httpClient: HttpClient) { }
  
  uploadedImage?: File;

  postResponse: any;
  successResponse?: string;
  image?: string;

  public onImageUpload(event:any) {
    this.uploadedImage = event.target.files[0];
  }


  imageUploadAction() {
    const imageFormData = new FormData();
    imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);


    this.httpClient.post('http://localhost:8080/upload/image/', imageFormData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.postResponse = response;
          this.successResponse = this.postResponse.body.message;
        } else {
          this.successResponse = 'Image not uploaded due to some error!';
        }
      }
      );
    }

  viewImage() {
    this.httpClient.get('http://localhost:8080/get/image/info/' + this.image)
      .subscribe(
        res => {
          this.postResponse = res;
          this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
        }
      );
  }
}
*/
/*ngOnInit(){
  this.Linechart = new Chart('linechart',{type:'line',data:{labels:["100","250","300","350","400","500","550","600"],datasets:[{
    label:'les prix selon region',data:["tunis","mourouj","sousse","ghazela"],fill:false,LineTesnsion:0.3,
    borderColor:"red",
    borderWidth:1
  }

  ]},
  options:{
    title:"line chart",display:true
  },
  scales:{
    yAxes:[{ticks:{beginAtZero:true}}]
  }
})
}
  */
}
