import {Component, OnInit} from '@angular/core';
import {EmpleadoGestion} from "../empleado-gestion";
import {ActivatedRoute, Router} from "@angular/router";
import {EmpleadosService} from "../empleados.service";
import swal from "sweetalert2";

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrl: './empleado-detalles.component.css'
})
export class EmpleadoDetallesComponent implements OnInit {

  id: Number;
  empleado: EmpleadoGestion;

  constructor(private route: ActivatedRoute, private empleadoServicio: EmpleadosService) {
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.empleado = new EmpleadoGestion();
    this.empleadoServicio.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.empleado = dato;
      swal(`Detalles del empleado ${this.empleado.name}`);



    });

  }

}
