export class Specification {
	baggageCapacity: number;
	passengerCapacity: number;
	constructor(specification?: Specification) {
		this.baggageCapacity = specification?.baggageCapacity
			? specification?.baggageCapacity
			: 0;
		this.passengerCapacity = specification?.passengerCapacity
			? specification?.passengerCapacity
			: 0;
	}
}
