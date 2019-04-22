import { Component } from '@angular/core';
import { Employee, Service } from './app.service';

@Component({
  selector: 'app-root',
  providers: [Service],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employee: Employee;
  positions: string[];
  isVisible: boolean;
  hireDateOptions: any = {
    width: '100%',
    disabled: true
  };

  constructor(service: Service) {
    this.employee = service.getEmployee();
    this.positions = service.getPositions();
    this.changeOptions();
  }

  changeOptions() {
    this.isVisible = this.employee.Position !== 'CEO';
    this.hireDateOptions.disabled = this.employee.Position === 'CEO';
  }

  onFieldDataChanged(e: any) {
    if (e.dataField === 'Position') {
      this.changeOptions();
    }
  }
}
