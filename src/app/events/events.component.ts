import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
events=['Hackathon','Workshop','Quiz on Tech','Robowar','Symposium'];
event_table=[
  {date:"10 Apr 2021",
  fest:"Online National Level Technical Symposium 2021",
  type:"Technical, Symposium",
  clg:"PGP College of Engineering and Technology",
  city:"Namakkal",
  },
  {
    date:"10 Apr 2021",
    fest:"KRIYA 2021",
    type:"Technical, Management, Workshop, Symposium, Online",
    clg:"PSG College of Technology",
    city:"Coimbatore",
  },
  {
    date:"16 Apr 2021",
    fest:"National Conference on Evolution and Future Scope of Mechanical Science EFMS 2021",
    type:"Technical, Conference",
    clg:"Bannari Amman Institute of Technology",
    city:"Erode",
  },
  {
    date:"30 Mar 2021",
    fest:"ELIXIR 21",
    type:"Technical, Workshop, Symposium, Online",
    clg:"Karpaga Vinayaga College of Engineering and Technology",
    city:"Kanchipuram",
  },
  {
    date:"09 Apr 2021",
    fest:"Yukta:2021",
    type:"Technical, Cultural, Workshop, Symposium, Online, Entrepreneurship Summit",
    clg:"PSG Institute of Technology and Applied Research",
    city:"Coimbatore",
  },
  {
    date:"25 Mar 2021",
    fest:"HERTZ 2021",
    type:"Technical, Symposium",
    clg:"CARE Group of Institutions",
    city:"Tiruchirappalli",
  },
  {
    date:"25 Mar 2021",
    fest:"Diseno Electrico 21",
    type:"Technical, Online, Hackathon",
    clg:"Bannari Amman Institute of Technology",
    city:"Erode",
  },
  {
    date:"14 Mar 2021",
    fest:"XCEED AND K!ARNIVAL 2021",
    type:"Technical, Management, Online, Hackathon",
    clg:"College of Engineering Guindy Anna University",
    city:"Chennai",
  },
  {
    date:"18 Mar 2021",
    fest:"XION 2021",
    type:"Technical, Symposium, Online, Training",
    clg:"SRM Institute of Science and Technology Vadapalani Campus",
    city:"Chennai",
  },  
  {
    date:"26 Feb 2021",
    fest:"QQUEST 2021",
    type:"Technical, Online",
    clg:"Anna University",
    city:"Chennai",
  },
];
}
