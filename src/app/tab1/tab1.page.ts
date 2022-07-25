import { Component } from '@angular/core';
import { Animal } from '../interfaces/animal.interface';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  myAnimals: Animal[] = this.animalService.myAnimals;
  constructor(private animalService: AnimalService) {
    //console.log(this.animalService.myAnimals)
    this.animalService.refreshAnimals$.subscribe((e) => {
      if(e){
        this.myAnimals = JSON.parse(JSON.stringify(this.animalService.myAnimals));
      }
    })
  }

}
