import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [CommonModule, TranslateModule, HomeRoutingModule, NgOptimizedImage, HomeComponent],
})
export class HomeModule {}
