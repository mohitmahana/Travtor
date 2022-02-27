import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
const uiComponentsModule = [
	InputTextModule,
	DropdownModule,
	ButtonModule,
	CalendarModule,
	RadioButtonModule,
	SelectButtonModule,
];

@NgModule({
	declarations: [],
	imports: uiComponentsModule,
	exports: uiComponentsModule,
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrimeNgComponentsModule {}
