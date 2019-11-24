import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './compontes/encabezado/encabezado.component';
import { ListaComponent } from './compontes/producto/lista/lista.component';
import { ServicioproductoService } from './services/servicioproducto.service';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './compontes/landing/landing.component';
import { FormularioComponent } from './compontes/producto/formulario/formulario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ListaComponent,
    LandingComponent,
    FormularioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServicioproductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
