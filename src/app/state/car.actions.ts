import { createAction, props } from '@ngrx/store';
import { CarSort } from '../car/models/car-sort.model';
import { CarFilter } from '../car/models/car.filter.model';

export const setFilterModel = createAction(
	'setFilterModel',
	props<{ filterModel: CarFilter }>()
);
export const setCarSortModel = createAction(
	'setCarSortModel',
	props<{ carSortModel: CarSort }>()
);
