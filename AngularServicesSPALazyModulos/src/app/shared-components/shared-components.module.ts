import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, WeatherComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule],
  exports: [NavbarComponent, FooterComponent, WeatherComponent]
})
export class SharedComponentsModule {}
