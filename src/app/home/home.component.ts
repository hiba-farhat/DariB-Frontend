import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

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
