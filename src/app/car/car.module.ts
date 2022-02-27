import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
	CUSTOM_ELEMENTS_SCHEMA,
	NgModule,
	NO_ERRORS_SCHEMA,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PrimeNgComponentsModule } from '../prime-ng/prime-ng.module';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CarFilterCardComponent } from './components/car-filter-card/car-filter-card.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarSortComponent } from './components/car-sort/car-sort.component';
import { CarsSearchComponent } from './components/cars-search/cars-search.component';
const carRoutes: Routes = [
	{
		path: 'car',
		children: [
			{ path: '', redirectTo: 'search', pathMatch: 'full' },
			{ path: 'search', component: CarsSearchComponent },
			{ path: 'list', component: CarListComponent },
			{ path: 'sort', component: CarSortComponent },
		],
	},
];

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RouterModule.forChild(carRoutes),
		PrimeNgComponentsModule,
		HttpClientModule,
	],
	declarations: [
		CarsSearchComponent,
		CarListComponent,
		CarSortComponent,
		CarFilterCardComponent,
		CarCardComponent,
	],
	providers: [DatePipe],
	schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class CarModule {}
