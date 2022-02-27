import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { selectCarSortState } from 'src/app/state/car.selectors';
import { CarFilterType } from '../../enums/filter-type.enum';
import { SortType } from '../../enums/sort-type.enum';
import { CarItineraries } from '../../models/car-itineraries.model';
import { CarMockItineraries } from '../../models/car-mock-itineraries.model';
import { CarSort } from '../../models/car-sort.model';
import { Car } from '../../models/car.model';
import { Fare } from '../../models/fare.model';
import { Vehicle } from '../../models/vehicle.model';
import { CarService } from '../../services/car.service';
import * as fromCar from './../../../state/car.reducer';
import { CarListComponent } from './car-list.component';
class MockCarService {
	getCarList(): Observable<CarMockItineraries> {
		let carMockItineraries: CarMockItineraries = new CarMockItineraries();
		let carItineraries: CarItineraries = new CarItineraries();
		let car: Car = new Car();
		let fare: Fare = new Fare();
		fare.perDay = 20;
		fare.totalAmount = 100;
		let vehicle: Vehicle = new Vehicle();
		vehicle.name = 'aaa';
		vehicle.type = 'aaa';
		car.fare = fare;
		car.vehicle = vehicle;
		let car1: Car = new Car();
		let fare1: Fare = new Fare();
		fare1.perDay = 40;
		fare1.totalAmount = 100;
		let vehicle1: Vehicle = new Vehicle();
		vehicle1.name = 'ddd';
		vehicle1.type = 'ddd';
		car1.fare = fare1;
		car1.vehicle = vehicle1;
		let car2: Car = new Car();
		let fare2: Fare = new Fare();
		fare2.perDay = 90;
		fare2.totalAmount = 100;
		let vehicle2: Vehicle = new Vehicle();
		vehicle2.name = 'ccc';
		vehicle2.type = 'ccc';
		car2.fare = fare2;
		car2.vehicle = vehicle2;
		let car3: Car = new Car();
		let fare3: Fare = new Fare();
		fare3.perDay = 90;
		fare3.totalAmount = 100;
		let vehicle3: Vehicle = new Vehicle();
		vehicle3.name = 'ccc';
		vehicle3.type = 'ccc';
		car3.fare = fare3;
		car3.vehicle = vehicle3;
		carItineraries.currency = 'USD';
		carItineraries.carItineraries = [car, car1, car2, car3];
		carMockItineraries.carMockItineraries = carItineraries;
		return of(carMockItineraries);
	}
}
fdescribe('CarListComponent', () => {
	let component: CarListComponent;
	let fixture: ComponentFixture<CarListComponent>;
	let store: MockStore<fromCar.State>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CarListComponent],
			providers: [
				{
					provide: CarService,
					useClass: MockCarService,
				},
			],
			imports: [
				RouterTestingModule,
				StoreModule.forRoot([]),
				StoreModule.forFeature(fromCar.carFeatureKey, fromCar.carReducer),
			],
			schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CarListComponent);
		component = fixture.componentInstance;
		component.carFilterTypeForm = new FormGroup({});
		store = TestBed.get(Store);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should selectFilterType sort function', () => {
		component.ngOnInit();
		component.carFilterTypeForm
			.get('filterType')
			?.setValue({ key: CarFilterType.SORT, value: 'Sort' });
		component.selectFilterType();
		expect(component).toBeTruthy();
	});
	it('should selectFilterType filter function', () => {
		component.ngOnInit();
		component.carFilterTypeForm
			.get('filterType')
			?.setValue({ key: CarFilterType.FILTER, value: 'Filter' });
		component.selectFilterType();
		expect(component).toBeTruthy();
	});

	it('should sortCarByType PA', () => {
		let carSort: CarSort = new CarSort();
		carSort.sortType = SortType.PA;
		spyOn(store, 'pipe').and.returnValue(of(carSort));
		component.ngOnInit();
		store.select(selectCarSortState).subscribe((data) => {
			expect(data).toEqual(carSort);
		});
	});
	it('should sortCarByType PD', () => {
		let carSort: CarSort = new CarSort();
		carSort.sortType = SortType.PD;
		spyOn(store, 'pipe').and.returnValue(of(carSort));
		component.ngOnInit();
		store.select(selectCarSortState).subscribe((data) => {
			expect(data).toEqual(carSort);
		});
	});
	it('should sortCarByType RA', () => {
		let carSort: CarSort = new CarSort();
		carSort.sortType = SortType.RA;
		spyOn(store, 'pipe').and.returnValue(of(carSort));
		component.ngOnInit();
		store.select(selectCarSortState).subscribe((data) => {
			expect(data).toEqual(carSort);
		});
	});
	it('should sortCarByType RD', () => {
		let carSort: CarSort = new CarSort();
		carSort.sortType = SortType.RD;
		spyOn(store, 'pipe').and.returnValue(of(carSort));
		component.ngOnInit();
		store.select(selectCarSortState).subscribe((data) => {
			expect(data).toEqual(carSort);
		});
	});
	it('should sortCarByType CA', () => {
		let carSort: CarSort = new CarSort();
		carSort.sortType = SortType.CA;
		spyOn(store, 'pipe').and.returnValue(of(carSort));
		component.ngOnInit();
		store.select(selectCarSortState).subscribe((data) => {
			expect(data).toEqual(carSort);
		});
	});
	it('should sortCarByType CD', () => {
		let carSort: CarSort = new CarSort();
		carSort.sortType = SortType.CD;
		spyOn(store, 'pipe').and.returnValue(of(carSort));
		component.ngOnInit();
		store.select(selectCarSortState).subscribe((data) => {
			expect(data).toEqual(carSort);
		});
	});
});
