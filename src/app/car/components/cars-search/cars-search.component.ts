import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setFilterModel } from 'src/app/state/car.actions';
import { Constants } from '../../constants/Constants';
import { CarFilter } from '../../models/car.filter.model';
import * as fromCar from './../../../state/car.reducer';
@Component({
	selector: 'app-cars-search',
	templateUrl: './cars-search.component.html',
	styleUrls: ['./cars-search.component.scss'],
})
export class CarsSearchComponent {
	carFilterForm: FormGroup = new FormGroup({});
	onSearchButtonClicked = false;
	Constants = Constants;
	constructor(
		private router: Router,
		private store: Store<fromCar.State>,
		private datePipe: DatePipe
	) {}

	ngOnInit(): void {
		this.onFormLoad();
	}

	/**
	 * @description : This will add controls to car search page
	 *
	 * @memberof CarsSearchComponent
	 */
	onFormLoad() {
		this.carFilterForm.addControl(
			'pickUpLocation',
			new FormControl('', Validators.required)
		);
		this.carFilterForm.addControl(
			'pickUpDate',
			new FormControl('', Validators.required)
		);
		this.carFilterForm.addControl(
			'dropOffDate',
			new FormControl('', Validators.required)
		);
		this.carFilterForm.addControl(
			'pickUpTime',
			new FormControl('', Validators.required)
		);
		this.carFilterForm.addControl(
			'dropOffTime',
			new FormControl('', Validators.required)
		);
		this.carFilterForm.addControl('driver', new FormControl(''));
	}

	/**
	 * @description : This will filter the car and navigate to list
	 *
	 * @memberof CarFilterComponent
	 */
	filterCar() {
		this.onSearchButtonClicked = true;
		if (this.carFilterForm.valid) {
			this.createFilterModel();
			this.router.navigate(['car/list']);
		}
	}

	/**
	 * @description : This is will create filter model and store it into redux
	 *
	 * @private
	 * @memberof CarFilterComponent
	 */
	private createFilterModel() {
		const filterModel: CarFilter = new CarFilter();
		filterModel.pickUpLocation =
			this.carFilterForm.get('pickUpLocation')?.value;
		filterModel.pickUpDate = this.datePipe.transform(
			this.carFilterForm.get('pickUpDate')?.value,
			'MMM d'
		);
		filterModel.dropOffDate = this.datePipe.transform(
			this.carFilterForm.get('dropOffDate')?.value,
			'MMM d'
		);
		filterModel.pickUpTime = this.datePipe.transform(
			this.carFilterForm.get('pickUpTime')?.value,
			'hh:mm a'
		);
		filterModel.dropOffTime = this.datePipe.transform(
			this.carFilterForm.get('dropOffTime')?.value,
			'hh:mm a'
		);
		filterModel.driver = this.carFilterForm.get('driver')?.value.key;
		this.store.dispatch(
			setFilterModel({
				filterModel: filterModel,
			})
		);
	}
}
