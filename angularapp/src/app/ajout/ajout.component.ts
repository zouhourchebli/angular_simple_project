import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {


    // ##########################################################################################
/*   url= "https://pbs.twimg.com/profile_images/744472138694918144/Uug1cpz-_400x400.jpg";
  display = true; */


 /*  cars = [

    'bmw',
    'toyota',
    'rang rover',
    'audi'
  ]
   */

/*   students = [
    {
      name: 'amine', 
      age: 18
    },
    {
      name: 'salim', 
      age: 16
    },
    {
      name: 'sirine', 
      age: 21
    },
    {
      name: 'salma', 
      age: 28
    },
  ] */

  // color = 'red';

/*  user = {

  name: 'ahmed',
  age: 22,
  bg: 'yellow',
  color: 'blue'
 } */

/* 
 students = [
  {
    name: 'amine', 
    age: 18
  },
  {
    name: 'salim', 
    age: 16
  },
  {
    name: 'sirine', 
    age: 21
  },
  {
    name: 'salma', 
    age: 28
  },
]
 */

// ##########################################################################################



  hero = {
    name: '',
    power: 0

  }

  image: any;

  
  selectImage(e: any){
    this.image = e.target.files[0];
    console.log(e);
    console.log(this.image);
  }

  ajout() {
 /*    this._shared.heros.push(this.hero);
    this.hero = {
      name: '',
      power: 0,
      image: ''
    } */

    let formData = new FormData()
    formData.append('name', this.hero.name)
    formData.append('power', this.hero.power.toString())
    formData.append('image', this.image)

    this._shared.createNewHero(formData).subscribe(
      res=>{
        this.hero = {
          name: '',
          power: 0
        }
      },
      err=>{
         console.log(err);
      }
    );
  }

  constructor(public _shared: SharedService) { }

  ngOnInit(): void {
  }

}
