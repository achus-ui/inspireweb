import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  public directorDetails = [
    {
      name: 'Syam Krishnan K',
      role: 'Director Administration',
      pic: 'assets/img/syam.jpg',
      mesg: 'The eminence in enlightenment inquisition of faculty members in which inspire has not made any compromise. It has gone to transcend & retrieve intellectuals from all over the terrene to enhance its faculty strength & predication. Iinvite all those students to join in inspire who believes in themselves & ready give their 100 percent.'
    },
    {
      name: 'Sebin Mendez',
      role: 'Director Technical',
      pic: 'assets/img/sebin.jpg',
      mesg: 'I wish to thank you for showing enthusiasm in inspire institute for technical studies.We have been implementing a quality pedagogy in technical studies. We foster sharpening of skills & enhancement of knowledge base in our students through various extracurricular, co-curricular activities.We provide 100 % job assurance on each courses of our institution.We assure you of a very enriching & fruitful time that your ward will be spending with us.'
    }
  ];
  public testimonials = [
    {
      name: 'Praveen Raj',
      role: 'Academic coordinator, Archana College of Engineering',
      pic:  'assets/img/testimonials/praveen.jpg',
      mesg: 'Quality of education relies on accomplishment rather than setting standards. May your new endeavor get you lots of fortune, name and fame.I wish you good luck in reaching the top level.'
    },
    {
      name: 'Ramkishore Babu',
      role: 'HOD, Department of Mechanical Engineering, Archana College of Engineering',
      pic:  'assets/img/testimonials/ram.jpg',
      mesg: 'Inspire can replace an empty mind with an open one.'
    },
    {
      name: 'Anson Albert',
      role: 'Piping Engineer Hyundai Rotem',
      pic: 'assets/img/testimonials/anson.jpg',
      mesg: 'Inspire is very helpful for diploma and engineer students. They create good atmosphere for student till learn and practice in the real-time scenario.'
    },
    {
      name: 'Juthin Alex',
      role: 'Assistant Professor & structural consultant',
      pic: 'assets/img/testimonials/juthin.jpg',
      mesg: 'Intelligence plus character that is the goal of true education & that can be achieved from inspire.'
    },
    {
      name: 'Ranjani R',
      role: 'Assistant Professor & Structural consultant',
      pic: 'assets/img/testimonials/ranjani.jpg',
      mesg: 'It’s more than just a coaching institute which looks into the all round development of students.'
    },
    {
      name: 'Bintu S Babu',
      role: 'Director, Pinnacle Training India',
      pic: 'assets/img/testimonials/bintu.jpg',
      mesg: 'For all your hard work and compassion, you deserve the success you are enjoying.Sending you our warmest congratulations on your official opening.Best wishes.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
