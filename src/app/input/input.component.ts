import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  numOfCubes = 3;
  cubes: number[][] = [];
  graph: number [][] = [];


  constructor() {

    for (let i = 0; i < this.numOfCubes; i++) {
      this.cubes[i] = [];
      for (let j = 0; j < 6; j++) {
        this.cubes[i][j] = Math.floor(Math.random() * 10);
      }
    }


  }


  ngOnInit() {
  }

  onChangeNum($event){
    for (let i = 0; i < this.numOfCubes; i++) {
      this.cubes[i] = [];
      for (let j = 0; j < 6; j++) {
        this.cubes[i][j] = Math.floor(Math.random() * 10);
      }
    }
  }

  onChangeColor($event, i, j) {
    this.cubes[i][j] = $event.target.value;
  }
  setExample(num) {
    switch (num) {
      case 1:

        this.numOfCubes = 3;
        this.cubes = [[1, 2, 2, 2, 1, 2], [3, 3, 3, 3, 3, 3], [3, 2, 1, 1, 1, 1]];
        break;
      case 2:
        this.numOfCubes = 8;
        this.cubes = [[1, 5, 10, 3, 6, 5],
          [2, 6, 7, 3 , 6, 9],
          [5, 7, 3, 2, 1, 9],
          [1, 3, 3, 5, 8, 10],
          [6, 6, 2, 2, 4, 4],
          [1, 2, 3, 4, 5, 6],
          [10, 9, 8, 7, 6, 5],
          [6, 1, 2, 3, 4 , 7],
          [1, 2, 3, 3, 2, 1],
          [3, 2, 1, 1, 2 , 3]];
        break;

    }


  }

  topSort() {
    //using queue

  }

  initGraph() {

  }

  calculate

  tallestTower() {

    console.log('init graph');

    this.initGraph();
    console.log('top sort');
    this.topSort();



  }



}
