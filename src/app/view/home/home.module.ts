import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule        
    ],
    declarations: [
        IndexComponent,        
    ],
    exports: [IndexComponent],
    bootstrap: [IndexComponent],
    providers: [],
})
export class HomeModule { }