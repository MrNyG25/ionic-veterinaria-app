import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from '../interfaces/animal.interface';

@Pipe({
  name: 'filterHealthAnimals'
})
export class FilterHealthAnimalsPipe implements PipeTransform {

  transform(animals: Animal[], healthAnimals: boolean): unknown {
    return animals.filter(e => e.isHealth === healthAnimals);
  }

}
