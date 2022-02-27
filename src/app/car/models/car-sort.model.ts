export class CarSort {
	sortType?: string;
	constructor(carSort?: CarSort) {
		this.sortType = carSort?.sortType ? carSort?.sortType : '';
	}
}
