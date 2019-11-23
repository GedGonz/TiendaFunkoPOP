import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './compontes/encabezado/encabezado.component';
import { ListaComponent } from './compontes/producto/lista/lista.component';
import { ServicioproductoService } from './services/servicioproducto.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ListaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServicioproductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
