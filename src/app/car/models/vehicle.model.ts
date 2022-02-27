import { Specification } from './specifications.model';

export class Vehicle {
	name: string;
	type: string;
	image: string;
	specifications: Specification;
	constructor(vehicle?: Vehicle) {
		this.name = vehicle?.name ? vehicle?.name : '';
		this.type = vehicle?.type ? vehicle?.type : '';
		this.image = vehicle?.image ? vehicle?.image : '';
		this.specifications = vehicle?.specifications
			? vehicle?.specifications
			: new Specification();
	}
}
