import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';

import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ChipModule } from 'primeng/chip';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';

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
    CardModule,
    PaginatorModule,
    ProgressSpinnerModule,
    ChipModule,
    ScrollPanelModule,
    MessagesModule,
    MultiSelectModule,
    CalendarModule,
    CheckboxModule
    
  ]
})
export class PrimengModule { }
