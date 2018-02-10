import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav4',
  templateUrl: './nav4.component.html',
  styleUrls: ['./nav4.component.css']
})
export class Nav4Component implements OnInit {
  imgs: Array<string> = [
    '001.jpg',
    '002.jpg',
    '003.jpg',
    '004.jpg',
    '005.jpg',
    '006.jpg',
    '007.jpg',
    '008.jpg',
    '009.jpg',
    '010.jpg',
    '011.jpg',
    '012.jpg',
    '013.jpg',
    '014.jpg',
    'Ζ01.jpg',
    'Ζ02.jpg',
    'Ζ03.jpg',
    'Ζ04.jpg',
    'Ζ05.jpg',
    'Ζ06.jpg',
    'Ζ07.jpg',
    'Ζ08.jpg',
    'Ζ09.jpg',
    'Ζ10.jpg',
    'Ζ11.jpg',
    'Ζ12.jpg',
    'Ζ13.jpg',
    'Ζ14.jpg',
    'Ζ15.jpg',
    'Ζ16.jpg',
    'Μ01.jpg',
    'Μ02.jpg',
    'Μ03.jpg',
    'Μ04.jpg',
    'Μ05.jpg',
    'Μ06.jpg',
    'Μ07.jpg',
    'Μ08.jpg',
    'Μ09.jpg',
    'Μ10.jpg',
    'Μ11.jpg',
    'Μ12.jpg',
    'Μ13.jpg',
    'Μ14.jpg',
    'Μ16.jpg',
    'Μ21.jpg',
    'Μ23.jpg',
    'Μ25.jpg',
    'Μ26.jpg',
    'Μ29.jpg',
  ];

  constructor() { }

  ngOnInit() {
    for (const entry of this.imgs) {
      console.log(entry);
    }
  }

}
