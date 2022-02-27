import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarMockItineraries } from '../models/car-mock-itineraries.model';

@Injectable({
	providedIn: 'root',
})
export class CarService {
	constructor(private httpClient: HttpClient) {}

	getCarList(): Observable<CarMockItineraries> {
		return this.httpClient.get<CarMockItineraries>(
			'../../assets/carMockItineraries.json'
		);
	}
}
