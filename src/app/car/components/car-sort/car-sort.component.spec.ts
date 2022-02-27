import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CarSortComponent } from './car-sort.component';
import { FormGroup } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';
import * as fromCar from './../../../state/car.reducer';
import { MockStore } from '@ngrx/store/testing';
import { setCarSortModel } from 'src/app/state/car.actions';
import { SortType } from '../../enums/sort-type.enum';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('CarSortComponent', () => {
	let component: CarSortComponent;
	let fixture: ComponentFixture<CarSortComponent>;
	let store: MockStore<fromCar.State>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CarSortComponent],
			schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
			imports: [
				RouterTestingModule,
				StoreModule.forRoot([]),
				StoreModule.forFeature(fromCar.carFeatureKey, fromCar.carReducer),
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CarSortComponent);
		component = fixture.componentInstance;
		component.carSortForm = new FormGroup({});
		store = TestBed.get(Store);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should setSortData', () => {
		spyOn(store, 'dispatch');
		const carSortModel = {
			sortType: SortType.PA,
		};
		component.ngOnInit();
		component.setSortData();
		expect(store.dispatch).toHaveBeenCalledWith(
			setCarSortModel({
				carSortModel: carSortModel,
			})
		);
	});
});
