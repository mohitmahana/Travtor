import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CarFilterCardComponent } from './car-filter-card.component';

describe('CarFilterCardComponent', () => {
	let component: CarFilterCardComponent;
	let fixture: ComponentFixture<CarFilterCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CarFilterCardComponent],
			schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CarFilterCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
