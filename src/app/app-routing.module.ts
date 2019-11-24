import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent} from '../app/compontes/producto/lista/lista.component';
import { FormularioComponent} from '../app/compontes/producto/formulario/formulario.component';
import { LandingComponent} from '../app/compontes/landing/landing.component';
const routes: Routes = [
  { path: '',  component: LandingComponent  },
  { path: 'buscar',  component: ListaComponent  },
  { path: 'nuevo', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
