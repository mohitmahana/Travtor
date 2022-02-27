import { CarItineraries } from './car-itineraries.model';

export class CarMockItineraries {
	carMockItineraries: CarItineraries;
	constructor(carMockItineraries?: CarMockItineraries) {
		this.carMockItineraries = carMockItineraries?.carMockItineraries
			? carMockItineraries?.carMockItineraries
			: new CarItineraries();
	}
}
