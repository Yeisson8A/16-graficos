import { Component } from '@angular/core';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {
  public doughnutChartLabels: Array<any> = ['Tamales', 'Tortillas', 'Chorizo'];
  public doughnutChartData: Array<any> = [
    /* [350, 450, 100],
    [50, 150, 120], */
    [250, 130, 70]
  ];
  public doughnutChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public random() {
    this.doughnutChartData = [
      [
        /* Math.round(Math.random() * 100),
        Math.round(Math.random() * 100), */
        Math.round(Math.random() * 100)
      ],
      [
        /* Math.round(Math.random() * 100),
        Math.round(Math.random() * 100), */
        Math.round(Math.random() * 100)
      ],
      [
        /* Math.round(Math.random() * 100),
        Math.round(Math.random() * 100), */
        Math.round(Math.random() * 100)
      ]
    ];
  }
}
