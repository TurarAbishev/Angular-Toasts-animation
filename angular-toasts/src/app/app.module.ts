import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToastsCreationFormComponent } from './toasts-creation-form/toasts-creation-form.component';
import { ToastComponent } from './toast/toast.component';
import {FormsModule} from '@angular/forms';
import {ModelServiceService} from './model-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule} from './custom-material.module';

@NgModule({
  declarations: [
    AppComponent,
    ToastsCreationFormComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [ModelServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
