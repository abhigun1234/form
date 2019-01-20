import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { DatabindinginteplatedrivenComponent } from './databindinginteplatedriven/databindinginteplatedriven.component';
import { TformsComponent } from './tforms/tforms.component';
import { BootstarpdemoComponent } from './bootstarpdemo/bootstarpdemo.component';
import { PipeComponent } from './pipe/pipe.component';
import { UnittestingComponent } from './unittesting/unittesting.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatedrivenformComponent,
    DatabindinginteplatedrivenComponent,
    TformsComponent,
    BootstarpdemoComponent,
    PipeComponent,
    UnittestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
