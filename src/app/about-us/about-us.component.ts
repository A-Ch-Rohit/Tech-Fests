import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  institutes=[
    {name:'Sri Ramachandra Engineering and Technology', location:'Porur,Chennai',},
    {name:'Vellore Institute of Technology', location:'Vellore,Chennai',},
    {name:'SRM Institute of Science and Technology', location:'Vadapalani,Chennai',},
  ];

}
