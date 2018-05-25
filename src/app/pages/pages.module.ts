import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
         DashboardComponent,
         ProgressComponent,
         Graficas1Component,
         PagesComponent
        ],
    imports: [ CommonModule, SharedModule, PAGES_ROUTES], // Aquí importo el shared.
    exports: [ // se exportan para que se puedan utilizar desde fuera
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    providers: [],
})
export class PagesModule { }
