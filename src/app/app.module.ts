import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { LoginComponent } from "./child/login.component";
import { HeaderComponent } from "./parent/header.component";

import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, LoginComponent, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
