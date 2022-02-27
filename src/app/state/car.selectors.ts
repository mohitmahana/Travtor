import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCounter from './car.reducer';
import * as fromCar from './car.reducer';

export const selectCarRootState = createFeatureSelector<fromCar.State>(
	fromCar.carFeatureKey
);

export const selectFilterState = createSelector(
	selectCarRootState,
	(state: fromCounter.State) => state.filterModel
);

export const selectCarSortState = createSelector(
	selectCarRootState,
	(state: fromCounter.State) => state.carSortModel
);
