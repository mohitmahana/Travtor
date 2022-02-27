import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import * as fromCar from './../../../state/car.reducer';
import { CarsSearchComponent } from './cars-search.component';
import { MockStore } from '@ngrx/store/testing';
import { CarFilter } from '../../models/car.filter.model';
import { setFilterModel } from 'src/app/state/car.actions';
import { DatePipe } from '@angular/common';

fdescribe('CarsSearchComponent', () => {
	let component: CarsSearchComponent;
	let fixture: ComponentFixture<CarsSearchComponent>;
	let store: MockStore<fromCar.State>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CarsSearchComponent],
			schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
			providers: [DatePipe],
			imports: [
				RouterTestingModule,
				StoreModule.forRoot([]),
				StoreModule.forFeature(fromCar.carFeatureKey, fromCar.carReducer),
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CarsSearchComponent);
		component = fixture.componentInstance;
		component.carFilterForm = new FormGroup({});
		store = TestBed.get(Store);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should call filterCar', () => {
		spyOn(store, 'dispatch');
		component.ngOnInit();
		component.carFilterForm.get('pickUpLocation')?.setValue('test');
		component.carFilterForm
			.get('pickUpDate')
			?.setValue(new Date('2020-06-29T10:29:59'));
		component.carFilterForm
			.get('dropOffDate')
			?.setValue(new Date('2020-06-29T10:29:59'));
		component.carFilterForm
			.get('pickUpTime')
			?.setValue(new Date('2020-06-29T10:29:59'));
		component.carFilterForm
			.get('dropOffTime')
			?.setValue(new Date('2020-06-29T10:29:59'));
		const filterModel: CarFilter = new CarFilter();
		filterModel.pickUpLocation = 'test';
		filterModel.pickUpDate = 'Jun 29';
		filterModel.pickUpTime = '10:29 AM';
		filterModel.dropOffDate = 'Jun 29';
		filterModel.dropOffTime = '10:29 AM';
		filterModel.driver = '24';
		component.carFilterForm.get('driver')?.setValue({ key: '24', value: '24' });
		component.filterCar();
		expect(store.dispatch).toHaveBeenCalledWith(
			setFilterModel({
				filterModel: filterModel,
			})
		);
		expect(component.onSearchButtonClicked).toBeTruthy();
	});
});
