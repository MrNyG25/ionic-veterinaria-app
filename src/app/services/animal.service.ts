import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Animal } from '../interfaces/animal.interface';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  public  newAnimalSubject = new BehaviorSubject<boolean>(false);
  refreshAnimals$ = this.newAnimalSubject.asObservable();
  
  myAnimals: Animal[] = [
    {
      id: "8234j238423n4hg5",
      name: "Vaca 1",
      isHealth: false,
      imageUrl: "assets/cow.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      diseases: [
        {
          id: 1,
          name: "Fiebre"
        },
        {
          id: 1,
          name: "Parasitos"
        },
        {
          id: 1,
          name: "Carbon"
        }
      ]
    },
    {
      id: "k34kj34k34k5345k4477",
      name: "Vaca 2",
      isHealth: false,
      imageUrl: "assets/cow2.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      diseases: [
        {
          id: 1,
          name: "Fiebre"
        },
      ]
    },
    {
      id: "8j8k768j67kh77h",
      name: "Vaca 6",
      isHealth: true,
      imageUrl: "assets/cow3.jpeg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      diseases: []
    },
    {
      id: "75k65h4k56h6jjn77",
      name: "Vaca 7",
      isHealth: true,
      imageUrl: "assets/cow.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      diseases: []
    },
    {
      id: "sdfsdfsd33423j",
      name: "Vaca 8",
      isHealth: true,
      imageUrl: "assets/cow2.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      diseases: []
    }
  ]
  constructor() { }

  newAnimalEmmit(value: boolean){
    this.newAnimalSubject.next(value);
  }

  getAnimalById(id: string): Animal{
    return this.myAnimals.filter(e => e.id === id)[0];
  }

}
