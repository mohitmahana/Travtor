import { Component, Input } from '@angular/core';
import { CarFilter } from '../../models/car.filter.model';
@Component({
	selector: 'app-car-filter-card',
	templateUrl: './car-filter-card.component.html',
	styleUrls: ['./car-filter-card.component.scss'],
})
export class CarFilterCardComponent {
	@Input() filterModel!: CarFilter;
}
