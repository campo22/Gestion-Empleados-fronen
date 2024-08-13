import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaDeEmpleadosComponent} from "./lista-de-empleados/lista-de-empleados.component";
import {RegistrarEmpleadosComponent} from "./registrar-empleados/registrar-empleados.component";
import {ActualizarEmpleadoComponent} from "./actualizar-empleado/actualizar-empleado.component";
import {EmpleadoDetallesComponent} from "./empleado-detalles/empleado-detalles.component";

const routes: Routes = [
  { path: 'empleados',component:ListaDeEmpleadosComponent},
  {path:'',redirectTo:'empleados',pathMatch:'full'},
  {path:'registrar-empleados',component:RegistrarEmpleadosComponent},
  {path:'actualizar-empleados/:id',component:ActualizarEmpleadoComponent},
  {path:'empleados-detalles/:id',component:EmpleadoDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
