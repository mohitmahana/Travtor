import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { selectCarSortState } from 'src/app/state/car.selectors';
import { setCarSortModel } from '../../../state/car.actions';
import { Constants } from '../../constants/Constants';
import { CarSort } from '../../models/car-sort.model';
import * as fromCar from './../../../state/car.reducer';
@Component({
	selector: 'app-car-sort',
	templateUrl: './car-sort.component.html',
	styleUrls: ['./car-sort.component.scss'],
})
export class CarSortComponent implements OnInit {
	carSortForm: FormGroup = new FormGroup({});
	Constants = Constants;

	constructor(private store: Store<fromCar.State>, private router: Router) {}

	ngOnInit(): void {
		this.onFormLoad();
		this.setDefaultData();
	}

	/**
	 * @description : This will create car sort model and put it into redux
	 *
	 * @memberof CarSortComponent
	 */
	setSortData() {
		const carSortModel = {
			sortType: this.carSortForm.get('sortType')?.value,
		};
		this.store.dispatch(
			setCarSortModel({
				carSortModel: carSortModel,
			})
		);
		this.router.navigate(['car/list']);
	}

	/**
	 * @description : this will add form control
	 *
	 * @private
	 * @memberof CarSortComponent
	 */
	private onFormLoad() {
		this.carSortForm.addControl('sortType', new FormControl(''));
	}

	private setDefaultData() {
		this.store
			.pipe(select(selectCarSortState))
			.subscribe((carSort: CarSort) => {
				if (carSort && Object.keys(carSort)?.length) {
					this.carSortForm.get('sortType')?.setValue(carSort.sortType);
				} else {
					this.carSortForm
						.get('sortType')
						?.setValue(Constants.CAR_SORT_TYPE[0].key);
				}
			});
	}
}
