import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  movies: any;

  constructor() { }

  ngOnInit() {

    fetch('https://ghibliapi.herokuapp.com/films/?limit=10')
    .then((response) => response.json())
    .then((json) => {
      this.movies = json;
    });

  }

}
