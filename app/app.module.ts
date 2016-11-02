import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
@NgModule({
    imports: [BrowserModule],
    
    declarations: [AppComponent, AboutComponent, HomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }