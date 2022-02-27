import { createReducer, on } from '@ngrx/store';
import { CarSort } from '../car/models/car-sort.model';
import { CarFilter } from '../car/models/car.filter.model';
import * as CarAction from './car.actions';
export const carFeatureKey = 'carFeature';

export interface State {
	filterModel: CarFilter;
	carSortModel: CarSort;
}
const initialState: State = {
	filterModel: {},
	carSortModel: {},
};

const _carReducer = createReducer(
	initialState,
	on(CarAction.setFilterModel, (state: State, { filterModel }) => {
		return {
			...state,
			filterModel: filterModel,
		};
	}),
	on(CarAction.setCarSortModel, (state: State, { carSortModel }) => {
		return {
			...state,
			carSortModel: carSortModel,
		};
	})
);

export function carReducer(state: any, action: any) {
	return _carReducer(state, action);
}
