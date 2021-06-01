import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
    imports: [
        CommonModule,
        AboutRoutingModule        
    ],
    declarations: [
        IndexComponent,        
    ],
    exports: [IndexComponent],
    bootstrap: [IndexComponent],
    providers: [],
})
export class AboutModule { }