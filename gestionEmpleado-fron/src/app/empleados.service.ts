import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmpleadoGestion} from "./empleado-gestion";

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  // esta url obtiene el listado de todos los empleados
  private baseURL = "http://localhost:8080/api/v1/empleados";

  constructor(private httpClient: HttpClient) {
  }

  //este metodo nos sirve para obtener todos los empleados
  obtenerListadoEmpleados(): Observable<EmpleadoGestion[]> {
    return this.httpClient.get<EmpleadoGestion[]>(`${this.baseURL}`);

  }

  //este metodo nos sirve para guardar un empleado
  registrarEmpledo(empleado: EmpleadoGestion): Observable<object> {
    return this.httpClient.post(`${this.baseURL}`, empleado);

  }

  actualizarEmpleado(id: Number, empleado: EmpleadoGestion): Observable<EmpleadoGestion> {
    return this.httpClient.put<EmpleadoGestion>(`${this.baseURL}/${id}`, empleado);
  }

  eliminarEmpleado(id: Number): Observable<object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  obtenerEmpleadoPorId(id: Number): Observable<EmpleadoGestion> {
    // @ts-ignore
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

}
