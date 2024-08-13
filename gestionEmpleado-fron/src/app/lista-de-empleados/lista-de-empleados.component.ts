import {Component, OnInit} from '@angular/core';
import {EmpleadoGestion} from "../empleado-gestion";
import {EmpleadosService} from "../empleados.service";
import {Router} from "@angular/router";
import swal from "sweetalert2";


@Component({
  selector: 'app-lista-de-empleados',
  templateUrl: './lista-de-empleados.component.html',
  styleUrl: './lista-de-empleados.component.css'
})
export class ListaDeEmpleadosComponent implements OnInit{

empleados:EmpleadoGestion[];

  constructor(private empleadoService:EmpleadosService,private router:Router) {
  }

  ngOnInit(): void {

    this.obtenerEmpleados();
  }

actualizarEmpleados(id:Number): void {
    this.router.navigate(['actualizar-empleados',id])

}

  liminarEmpleado(id:Number){
    // @ts-ignore
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al empleado",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.empleadoService.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpleados();
          swal(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  private obtenerEmpleados(){
    this.empleadoService.obtenerListadoEmpleados().subscribe(dato=>{
      this.empleados=dato;
    });
  }
  verDetallesDelEmpleado(id:Number){
    this.router.navigate(['empleados-detalles',id]);
  }


}
