export class Fare {
	totalAmount: number;
	perDay: number;
	constructor(fare?: Fare) {
		this.totalAmount = fare?.totalAmount ? fare?.totalAmount : 0;
		this.perDay = fare?.perDay ? fare?.perDay : 0;
	}
}
