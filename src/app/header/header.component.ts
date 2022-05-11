import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById("app-body")!.className = "homepage-9 hp-6 homepage-1";
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

  showLoginForm(): void {
    document.getElementById('login-li')?.classList.add('current')
    document.getElementById('register-li')?.classList.remove('current')

    $("#tab-1").show(300)
    $("#tab-2").hide(300)

  }
  showRegisterForm(): void {
    document.getElementById('login-li')?.classList.remove('current')
    document.getElementById('register-li')?.classList.add('current')

    $("#tab-1").hide(300)
    $("#tab-2").show(300)
  }

}
