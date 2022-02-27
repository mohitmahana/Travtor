import { KeyValue } from '@angular/common';
import { driver_age } from '../../driver-age';
import { CarFilterType } from '../enums/filter-type.enum';
import { SortType } from '../enums/sort-type.enum';

export class Constants {
	static readonly CAR_SORT_TYPE: KeyValue<SortType, string>[] = [
		{ key: SortType.PA, value: 'Price : Lowest' },
		{ key: SortType.PD, value: 'Price : Highest' },
		{ key: SortType.RA, value: 'Rental Company : A to Z' },
		{ key: SortType.RD, value: 'Rental Company : Z to A' },
		{ key: SortType.CA, value: 'Car Type : A to Z' },
		{ key: SortType.CD, value: 'Car Type : Z to A' },
	];

	static readonly FILTER_TYPE: KeyValue<CarFilterType, string>[] = [
		{ key: CarFilterType.SORT, value: 'Sort' },
		{ key: CarFilterType.FILTER, value: 'Filter' },
	];

	static readonly DRIVER_AGE_LIST: KeyValue<string, string>[] = driver_age.map(
		(value: string) => {
			return { key: value, value: value };
		}
	);
}
