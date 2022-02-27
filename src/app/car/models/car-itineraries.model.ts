import { Car } from './car.model';
import { Paging } from './paging.model';

export class CarItineraries {
	currency: string;
	carItineraries: Car[];
	paging: Paging;
	constructor(carItineraries?: CarItineraries) {
		this.currency = carItineraries?.currency ? carItineraries?.currency : '';
		this.carItineraries = carItineraries?.carItineraries
			? carItineraries?.carItineraries
			: [];
		this.paging = carItineraries?.paging
			? carItineraries?.paging
			: new Paging();
	}
}
