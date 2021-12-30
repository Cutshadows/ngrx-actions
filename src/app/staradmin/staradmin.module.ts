import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { StarAdminRoutingModule } from './staradmin.routing.module';
import { SharedModules } from "../shared/shared.module";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { DetalleComponent } from "./pages/detalle/detalle.component";
import { EstadisticaComponent } from "./pages/estadistica/estadistica.component";
import { IngresoEgresoComponent } from "./pages/ingreso-egreso/ingreso-egreso.component";
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations:[
        DashboardComponent, 
        DetalleComponent, 
        EstadisticaComponent, 
        IngresoEgresoComponent,
        FooterComponent,
        NavbarComponent,
        SidebarComponent
    ],
    imports:[
        CommonModule, 
        StarAdminRoutingModule, 
        SharedModules,
        ReactiveFormsModule
    ]
})

export class StarAdminModule{}