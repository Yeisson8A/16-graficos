import { Component } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent {
  public radarChartOptions: any = {
    responsive: true,
  };
  public radarChartLabels: Array<any> = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: Array<any> = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Wolverine' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Magneto' }
  ];
  public radarChartType = 'radar';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
