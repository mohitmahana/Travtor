import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Car } from '../../models/car.model';
import { Fare } from '../../models/fare.model';

import { CarCardComponent } from './car-card.component';

fdescribe('CarCardComponent', () => {
	let component: CarCardComponent;
	let fixture: ComponentFixture<CarCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CarCardComponent],
			schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CarCardComponent);
		component = fixture.componentInstance;
		component.car = new Car();
		component.car.fare = new Fare();
		component.car.fare.totalAmount = 100;
		component.car.fare.perDay = 20;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	it('should get numberOfDays', () => {
		expect(component.numberOfDays).toBe(5);
	});
});
