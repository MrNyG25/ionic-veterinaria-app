import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/interfaces/animal.interface';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.page.html',
  styleUrls: ['./animal-detail.page.scss'],
})
export class AnimalDetailPage implements OnInit {
  idAnimal: string;
  myAminal: Animal;
  constructor(
    private _Activatedroute:ActivatedRoute,
    private animalService: AnimalService
    ) { 
    this.idAnimal= this._Activatedroute.snapshot.paramMap.get("id");
    console.log(this.idAnimal)

  }

  ngOnInit() {
    this.myAminal = this.animalService.getAnimalById(this.idAnimal);
  }

}
