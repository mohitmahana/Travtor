import { CancellationDetails } from './cancellation-details.model';
import { Fare } from './fare.model';
import { Vehicle } from './vehicle.model';

export class Car {
	id: string;
	unlimitedMileage: boolean;
	cancellationDetails: CancellationDetails;
	fare: Fare;
	vehicle: Vehicle;
	constructor(car?: Car) {
		this.id = car?.id ? car?.id : '';
		this.unlimitedMileage = car?.unlimitedMileage
			? car?.unlimitedMileage
			: false;
		this.cancellationDetails = car?.cancellationDetails
			? car?.cancellationDetails
			: new CancellationDetails();
		this.fare = car?.fare ? car?.fare : new Fare();
		this.vehicle = car?.vehicle ? car?.vehicle : new Vehicle();
	}
}
