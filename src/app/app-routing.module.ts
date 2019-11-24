import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent} from '../app/compontes/producto/lista/lista.component';
import { FormularioComponent} from '../app/compontes/producto/formulario/formulario.component';
const routes: Routes = [
  { path: '',  component: ListaComponent  },
  { path: 'nuevo', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
