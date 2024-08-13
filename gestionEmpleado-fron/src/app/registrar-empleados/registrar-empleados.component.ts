import {Component, OnInit} from '@angular/core';
import {EmpleadoGestion} from "../empleado-gestion";
import {EmpleadosService} from "../empleados.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registrar-empleados',
  templateUrl: './registrar-empleados.component.html',
  styleUrl: './registrar-empleados.component.css'
})
export class RegistrarEmpleadosComponent implements OnInit {


  empleado: EmpleadoGestion = new EmpleadoGestion();

  constructor(private empleadoService: EmpleadosService, private router: Router) {
  }

  ngOnInit(): void {

  }

  guardarEmpleado() {
    this.empleadoService.registrarEmpledo(this.empleado).subscribe(data => {
      console.log(data);
      this.irAlaListaDeEmpleados();

    }, error => console.log(error));
  }

  irAlaListaDeEmpleados() {
    this.router.navigate(['/empleados'])
  }

  onSubmit = (): void => {
    this.guardarEmpleado();
  };
}
