import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empleados } from './classes/empleados';
import { pedidos } from './classes/pedidos';
import { Pelicula } from './classes/peliculas';
import { Socios } from './classes/socios';
@Injectable({
  providedIn: 'root',
})
export class ApiCallsService {
  constructor(private http: HttpClient) {}


  //SOCIOS

  getSocios() {
    return this.http.get<Socios[]>('https://api-klk.herokuapp.com/socios');
  }

  PostSocios(SocioInsert: any) {
    console.log(SocioInsert);
    return this.http
      .post('https://api-klk.herokuapp.com/socios', SocioInsert)
      .subscribe((res) => console.log(res));
  }

  deleteSocios(id: string) {
    return this.http
      .delete(`https://api-klk.herokuapp.com/socios/${id}`)
      .subscribe((res) => console.log(res));
  }

  //EMPLEADOS

  getEmpleados(){
    return this.http.get<empleados[]>('https://api-klk.herokuapp.com/empleados')
  }

  PostEmpleados(EmpleadoInsert:any){
    return this.http.post('https://api-klk.herokuapp.com/empleados',EmpleadoInsert).subscribe((res) => console.log(res))
  }

  verifyEmpleados(Code:string){
    return this.http.get<Boolean>(`https://api-klk.herokuapp.com/empleados/verify/${Code}`)
  }

  deleteEmpleados(id: string) {
    return this.http
      .delete(`https://api-klk.herokuapp.com/empleados/${id}`)
      .subscribe((res) => console.log(res));
  }

  
//peliculas

  deletePeliculas(id: string) {
    return this.http
      .delete(`https://api-klk.herokuapp.com/peliculas/${id}`)
      .subscribe((res) => console.log(res));
  }


  postPelicula(Pelicula:any){
    return this.http.post('https://api-klk.herokuapp.com/peliculas',Pelicula).subscribe((res) => console.log(res))
  }

  getPeliculas(){
    return this.http.get<Pelicula[]>('https://api-klk.herokuapp.com/peliculas')
  }


//Pedidos

  postPedido(Pedido:any){
    return this.http.post('https://api-klk.herokuapp.com/pedidos',Pedido).subscribe((res) => console.log(res));
  }

  getPedido(){
    return this.http.get<pedidos[]>('https://api-klk.herokuapp.com/pedidos')
  }

  deletePedido(pedido:string,socio:string){
    return this.http.delete<pedidos[]>(`https://api-klk.herokuapp.com/pedidos/${pedido}/${socio}`).subscribe((res) => console.log(res));
  }

  devueltoPedido(pedido:string,socio:string){
    return this.http.put<pedidos[]>(`https://api-klk.herokuapp.com/pedidos/${pedido}/${socio}`, pedido).subscribe((res) => console.log(res));
  }
}
