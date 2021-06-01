import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
    imports: [
        CommonModule,
        ContactRoutingModule        
    ],
    declarations: [
        IndexComponent,        
    ],
    exports: [IndexComponent],
    bootstrap: [IndexComponent],
    providers: [],
})
export class ContactModule { }