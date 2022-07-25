import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Animal } from '../interfaces/animal.interface';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  
  myAnimals: Animal[] = [];

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public pieChartLabels = [ 'Sanos', 'Enfermos'];
  public pieChartDatasets = [ {
    data: [ 1, 1 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private animalServiceanimal: AnimalService) {
 
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.myAnimals = JSON.parse(JSON.stringify(this.animalServiceanimal.myAnimals)); 

    setTimeout(() => {

      let sanos = this.myAnimals.filter(e => e.isHealth === true).length;
      let enfermos = this.myAnimals.filter(e => e.isHealth === false).length;
    
      this.pieChartDatasets = [ {
        data: [ sanos, enfermos ]
      } ]
    }, 2000)
  }

  
}
