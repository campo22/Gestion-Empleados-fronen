import {Component, OnInit} from '@angular/core';
import {EmpleadoGestion} from "../empleado-gestion";
import {EmpleadosService} from "../empleados.service";
import {ActivatedRoute, Router} from "@angular/router";
import swal from "sweetalert2";

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrl: './actualizar-empleado.component.css'
})
export class ActualizarEmpleadoComponent implements OnInit {

  id: Number;
  empleado: EmpleadoGestion = new EmpleadoGestion;

  constructor(
    private empleadoService: EmpleadosService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.empleado = dato;
      swal(`Detalles del empleado ${this.empleado.name}`);
    });
  }

  onSubmit() {
    this.empleadoService.actualizarEmpleado(this.id, this.empleado).subscribe(dato => {
      this.irALaListaDeEmpleados();
      swal('Empleado actualizado', 'El empleado ha sido actualizado con éxito', 'success');
    }, error => console.log(error));
  }

  irALaListaDeEmpleados() {
    this.router.navigate(['/empleados']);
  }


}
