import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcumbsComponent,
        NopagefoundComponent
    ],
    imports: [ CommonModule, RouterModule],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcumbsComponent,
        NopagefoundComponent],
    providers: [],
})
export class SharedModule {}
