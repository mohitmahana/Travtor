import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CarItineraries } from '../models/car-itineraries.model';
import { CarMockItineraries } from '../models/car-mock-itineraries.model';
import { CarService } from './car.service';
fdescribe('CarService', () => {
	let service: CarService;
	let httpClientSpy: any;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule, HttpClientTestingModule],
		});
		httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']);
		service = TestBed.inject(CarService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('getCarList: should get Car list', () => {
		let carMockItineraries: CarMockItineraries = new CarMockItineraries();
		let carItineraries: CarItineraries = new CarItineraries();
		carItineraries.currency = 'USD';
		carMockItineraries.carMockItineraries = carItineraries;
		httpClientSpy.get.and.returnValue(of(carMockItineraries));
		service.getCarList().subscribe((response) => {
			expect(response).toBeDefined();
			expect(response.carMockItineraries.currency).toBe('USD');
		});
	});
});
