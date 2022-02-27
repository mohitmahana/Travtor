export class CancellationDetails {
	isCancellationFree: boolean;
	freeCancellationEndDate: string;
	constructor(cancellationDetails?: CancellationDetails) {
		this.isCancellationFree = cancellationDetails?.isCancellationFree
			? cancellationDetails?.isCancellationFree
			: false;
		this.freeCancellationEndDate = cancellationDetails?.freeCancellationEndDate
			? cancellationDetails?.freeCancellationEndDate
			: '';
	}
}
