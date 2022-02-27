import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CarModule } from './car/car.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import * as fromCar from './state/car.reducer';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FlightComponent } from './flight/flight.component';
import { HotelComponent } from './hotel/hotel.component';
import { CruisesComponent } from './cruises/cruises.component';

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		CarModule,
		RouterModule.forRoot([
			{ path: '', redirectTo: 'car', pathMatch: 'full' },
			{ path: 'flight', component: FlightComponent },
			{ path: 'hotel', component: HotelComponent },
			{ path: 'cruises', component: CruisesComponent },
			{
				path: 'car',
				loadChildren: () => import('./car/car.module').then((m) => m.CarModule),
			},
		]),
		StoreModule.forRoot([]),
		StoreModule.forFeature(fromCar.carFeatureKey, fromCar.carReducer),
	],
	declarations: [
		AppComponent,
		TopBarComponent,
		NavBarComponent,
		FlightComponent,
		HotelComponent,
		CruisesComponent,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
