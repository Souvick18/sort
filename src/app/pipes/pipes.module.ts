import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetFullName } from './pipes.component';

@NgModule({
    declarations: [ GetFullName ],
    imports: [ CommonModule ],
    exports: [ GetFullName ]
})

export class PipesModule {}
