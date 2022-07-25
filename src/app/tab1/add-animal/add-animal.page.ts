import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Animal } from 'src/app/interfaces/animal.interface';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.page.html',
  styleUrls: ['./add-animal.page.scss'],
})
export class AddAnimalPage implements OnInit {

  isHealth: boolean = false;

  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    diseases: new FormControl('', Validators.required)
  });
  
  constructor(
   private animalService: AnimalService,
   public toastController: ToastController,
   public router: Router
  ) { }

  ngOnInit() {
  }

  handleIsHealth($event){
    if($event.detail.checked){
      this.isHealth = true;
    }
  }

  crearAnimal(){
    console.log(this.formGroup.value)
    if(this.formGroup.valid){

      let newAnimal: any = {
        id: 'id_'+(new Date()).getTime(),
        name: this.formGroup.value.name,
        description: this.formGroup.value.description,
        imageUrl: 'assets/cow.jpg',
        isHealth: this.isHealth,
        diseases: this.getDiseases()
      }
      this.animalService.myAnimals.push(newAnimal);
      this.presentToast();
      console.log(this.animalService.myAnimals)
      this.animalService.newAnimalEmmit(true)
      //this.router.navigate(['/home/tab1'])
    }
  }

  getDiseases(){
    let diseases = this.formGroup.value.diseases;
    let arr = diseases.split(',');
    let res = []
    arr.forEach((e) => {
      res.push({
        id: 'id_'+(new Date()).getTime(),
        name: e
      })
    });
    return res;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Animal agregado',
      duration: 2000,
    });
    toast.present();
  }
}
