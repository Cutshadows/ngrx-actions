import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { DetalleComponent } from "./pages/detalle/detalle.component";
import { EstadisticaComponent } from "./pages/estadistica/estadistica.component";
import { IngresoEgresoComponent } from "./pages/ingreso-egreso/ingreso-egreso.component";

const routerStarAdmin:Routes=[
    {
        path:'',
        component:DashboardComponent,
        children:[
            {
                path:'detalle',
                component:DetalleComponent
            },
            {
                path:'ingreso-egreso',
                component:IngresoEgresoComponent
            },
            {
                path:'estadistica',
                component:EstadisticaComponent
            },
            {
                path:'**',
                redirectTo:'estadistica'
            },
        ]
    }
]
@NgModule({
    imports:[RouterModule.forChild(routerStarAdmin)],
    exports:[RouterModule]
})

export class StarAdminRoutingModule{}