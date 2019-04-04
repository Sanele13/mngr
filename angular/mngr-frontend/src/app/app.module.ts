import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule} from "@angular/cdk/drag-drop"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { BoardComponent } from './board/board.component';
import { FormComponent } from './components/form/form.component'

import {HttpClientModule} from "@angular/common/http";
import {HttpService} from "./services/http.service";
import { TaskPopupComponent } from './components/task-popup/task-popup.component';
import {MatDialogModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BoardComponent,
    FormComponent,
    TaskPopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    DragDropModule,
    HttpClientModule
  ],
  entryComponents:[
    TaskPopupComponent
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
