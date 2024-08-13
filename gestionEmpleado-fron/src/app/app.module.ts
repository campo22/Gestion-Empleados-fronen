import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDeEmpleadosComponent } from './lista-de-empleados/lista-de-empleados.component';
import {HttpClientModule} from "@angular/common/http";
import { RegistrarEmpleadosComponent } from './registrar-empleados/registrar-empleados.component';
import {FormsModule} from "@angular/forms";
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeEmpleadosComponent,
    RegistrarEmpleadosComponent,
    ActualizarEmpleadoComponent,
    EmpleadoDetallesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
