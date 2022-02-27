import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import {
	selectCarSortState,
	selectFilterState,
} from '../../../state/car.selectors';
import { Constants } from '../../constants/Constants';
import { CarFilterType } from '../../enums/filter-type.enum';
import { SortType } from '../../enums/sort-type.enum';
import { CarMockItineraries } from '../../models/car-mock-itineraries.model';
import { CarSort } from '../../models/car-sort.model';
import { CarFilter } from '../../models/car.filter.model';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';
import * as fromCar from './../../../state/car.reducer';
@Component({
	selector: 'app-car-list',
	templateUrl: './car-list.component.html',
	styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
	carList: Car[] = [];
	carFilterTypeForm: FormGroup = new FormGroup({});
	filterModel: CarFilter = new CarFilter();
	Constants = Constants;
	constructor(
		private carService: CarService,
		private store: Store<fromCar.State>,
		private router: Router
	) {}

	ngOnInit(): void {
		this.onFormLoad();
		this.subscribeToSelectors();
		this.getCars();
	}

	/**
	 * @description : this will select which filter type you want to apply
	 *
	 * @memberof CarListComponent
	 */
	selectFilterType() {
		if (
			CarFilterType.SORT === this.carFilterTypeForm.get('filterType')?.value.key
		) {
			this.router.navigate(['car/sort']);
		} else if (
			CarFilterType.FILTER ===
			this.carFilterTypeForm.get('filterType')?.value.key
		) {
			this.router.navigate(['car/search']);
		}
	}

	/**
	 * @description : service call to get car list
	 *
	 * @private
	 * @memberof CarListComponent
	 */
	private getCars() {
		this.carService
			.getCarList()
			.subscribe((carMockItineraries: CarMockItineraries) => {
				this.carList = carMockItineraries?.carMockItineraries.carItineraries;
				this.store
					.pipe(select(selectCarSortState))
					.subscribe((carSortModel: CarSort) => {
						this.sortCarByType(carSortModel);
					});
			});
	}
	/**
	 * @description : This will subscribe to selectors
	 *
	 * @private
	 * @memberof CarListComponent
	 */
	private subscribeToSelectors() {
		this.store
			.pipe(select(selectFilterState))
			.subscribe((filterModel: CarFilter) => {
				this.filterModel = filterModel;
			});
	}

	/**
	 * @description : This will add controls to the form group
	 *
	 * @private
	 * @memberof CarListComponent
	 */
	private onFormLoad() {
		this.carFilterTypeForm.addControl('filterType', new FormControl(''));
	}

	/**
	 * @description : this will sort list based on type
	 *
	 * @private
	 * @param {CarSort} carSortModel
	 * @memberof CarListComponent
	 */
	private sortCarByType(carSortModel: CarSort) {
		switch (carSortModel?.sortType) {
			case SortType.PA:
				this.carList = this.carList.sort(
					(carA: any, carB: any) => carA.fare.perDay - carB.fare.perDay
				);
				break;
			case SortType.PD:
				this.carList = this.carList.sort(
					(carA: any, carB: any) => carB.fare.perDay - carA.fare.perDay
				);
				break;
			case SortType.RA:
				this.carList = this.carList.sort((carA: any, carB: any) => {
					if (carA.vehicle.name > carB.vehicle.name) {
						return 1;
					}
					if (carA.vehicle.name < carB.vehicle.name) {
						return -1;
					}
					return 0;
				});
				break;
			case SortType.RD:
				this.carList = this.carList.sort((carA: any, carB: any) => {
					if (carA.vehicle.name < carB.vehicle.name) {
						return 1;
					}
					if (carA.vehicle.name > carB.vehicle.name) {
						return -1;
					}
					return 0;
				});
				break;
			case SortType.CA:
				this.carList = this.carList.sort((carA: any, carB: any) => {
					if (carA.vehicle.type > carB.vehicle.type) {
						return 1;
					}
					if (carA.vehicle.type < carB.vehicle.type) {
						return -1;
					}
					return 0;
				});
				break;
			case SortType.CD:
				this.carList = this.carList.sort((carA: any, carB: any) => {
					if (carA.vehicle.type < carB.vehicle.type) {
						return 1;
					}
					if (carA.vehicle.type > carB.vehicle.type) {
						return -1;
					}
					return 0;
				});
				break;
		}
	}
}
