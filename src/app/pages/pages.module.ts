import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
    declarations: [
         DashboardComponent,
         ProgressComponent,
         Graficas1Component,
         PagesComponent,
         IncrementadorComponent,
         GraficoDonaComponent,
         AccountSettingsComponent,
         PromesasComponent,
         RxjsComponent
        ],
    imports: [ CommonModule, SharedModule, PAGES_ROUTES, FormsModule, ChartsModule

    ], // Aquí importo el shared.
    exports: [ // se exportan para que se puedan utilizar desde fuera
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    providers: [],
})
export class PagesModule { }
