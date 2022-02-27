export class CarFilter {
	pickUpLocation?: string;
	pickUpDate?: string | null;
	dropOffDate?: string | null;
	pickUpTime?: string | null;
	dropOffTime?: string | null;
	driver?: string;
	constructor(carFilter?: CarFilter) {
		this.pickUpLocation = carFilter?.pickUpLocation
			? carFilter?.pickUpLocation
			: '';
		this.pickUpDate = carFilter?.pickUpDate ? carFilter?.pickUpDate : null;
		this.dropOffDate = carFilter?.dropOffDate ? carFilter?.dropOffDate : null;
		this.pickUpTime = carFilter?.pickUpTime ? carFilter?.pickUpTime : null;
		this.dropOffTime = carFilter?.dropOffTime ? carFilter?.dropOffTime : null;
		this.driver = carFilter?.driver ? carFilter?.driver : '';
	}
}
