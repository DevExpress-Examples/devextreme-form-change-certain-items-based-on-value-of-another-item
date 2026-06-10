import { Component } from '@angular/core';
import { DxFormModule, DxFormTypes } from 'devextreme-angular/ui/form';
import { Employee, Service } from './app.service';

@Component({
    selector: 'app-root',
    imports: [DxFormModule],
    providers: [Service],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  employee: Employee;

  positions: string[];

  isAddressVisible = true;

  hireDateEditorOptions = {
    width: '100%',
    disabled: false,
  };

  constructor(service: Service) {
    this.employee = service.getEmployee();
    this.positions = service.getPositions();
    this.changeOptions();
  }

  changeOptions(): void {
    this.isAddressVisible = this.employee.Position !== 'CEO';
    this.hireDateEditorOptions = {
      ...this.hireDateEditorOptions,
      disabled: this.employee.Position === 'CEO',
    };
  }

  onFieldDataChanged(e: DxFormTypes.FieldDataChangedEvent): void {
    if (e.dataField === 'Position') {
      this.changeOptions();
    }
  }
}
