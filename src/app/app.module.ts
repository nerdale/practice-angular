import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DisplayComponent } from './display/display.component';
import { ControlComponent } from './control/control.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2'; //acá importo todo desde la pagina de feribase
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service'; //auth service tenemos que crearlo luego nosotros desde la consola

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DisplayComponent,
    ControlComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase), //Acá inicializamos feribase
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
