import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';

import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  // imports: [
  //   CommonModule
  // ],
  exports:[
    ButtonModule,
    MenubarModule,
    StyleClassModule,
    DividerModule,
    PanelModule,
    ToolbarModule,
    SplitButtonModule,
    GalleriaModule,
    CarouselModule,
    ImageModule,
    CardModule
  ]
})
export class PrimengModule { }
