import { Component, Input } from '@angular/core';
import { Car } from '../../models/car.model';

@Component({
	selector: 'app-car-card',
	templateUrl: './car-card.component.html',
	styleUrls: ['./car-card.component.scss'],
})
export class CarCardComponent {
	@Input() car!: Car;

	get numberOfDays(): number {
		return Math.round(this.car.fare.totalAmount / this.car.fare.perDay);
	}
}
