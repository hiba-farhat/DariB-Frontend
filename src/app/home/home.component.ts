import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  public version:string = "1.0.0";
  public locale:string  = "en-US";
  public currencyFormat = { style:"currency", currency: "USD" };
  public dateFormat     = { year:'numeric', month: 'short', day: 'numeric'};

  // API Related configs
  public apiPort:string = "9119";
  public apiProtocol?:string;
  public apiHostName?:string;
  public baseApiPath:string;

  constructor(){
      if (this.apiProtocol===undefined){
          this.apiProtocol = window.location.protocol;
      }
      if (this.apiHostName===undefined){
          this.apiHostName = window.location.hostname;
      }
      if (this.apiPort===undefined){
          this.apiPort = window.location.port;
      }
      if (this.apiHostName.includes("infomud") || this.apiHostName.includes("heroku")){
          this.baseApiPath = this.apiProtocol + "//" + this.apiHostName + "/";
      }
      else{
          this.baseApiPath = this.apiProtocol + "//" + this.apiHostName + ":" + this.apiPort +"/";
      }
      if (this.locale===undefined){
          this.locale = navigator.language;
      }
  }

  ngOnInit(): void {

    $('#status').fadeOut();
    $('#preloader').delay(200).fadeOut('slow');

    $(window).on('scroll', function () {
        var sticky = $(".sticky-header");
        var scroll = $(window).scrollTop();
        if (scroll! < 265) {
            sticky.removeClass("sticky");
        } else {
            sticky.addClass("sticky");
        }
    });

    $(window).on('scroll load', function () {
      $("#header.cloned #logo img").attr("src", $('#header #logo img').attr('data-sticky-logo')!);
    });

    $(".dropdown-filter").on('click', function () {
      $(".explore__form-checkbox-list").toggleClass("filter-block");
    });





  }

  

}
