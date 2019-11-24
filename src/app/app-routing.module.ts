import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent} from '../app/compontes/producto/lista/lista.component';
import { FormularioComponent} from '../app/compontes/producto/formulario/formulario.component';
import { LandingComponent} from '../app/compontes/landing/landing.component';
import { ProductoComponent} from '../app/compontes/producto/producto.component';
const routes: Routes = [
  { path: '',  component: LandingComponent  },
  { path: 'buscar',  component: ProductoComponent  },
  { path: 'nuevo', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
