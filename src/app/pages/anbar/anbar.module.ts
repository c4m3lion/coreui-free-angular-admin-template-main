import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AnbarRoutingModule } from './anbar-routing.module';


import {
  AccordionModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  GridModule,
  PopoverModule,
  TableModule,
  UtilitiesModule,
  FormModule,
  ButtonGroupModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FunksionalGrouplarinTeyiniComponent } from './Funksionalgrouplaradi/funksionalgroiplarinteyini.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports:[
    AnbarRoutingModule,
    TableModule,
    CardModule,
    AccordionModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    DropdownModule,
    PopoverModule,
    ButtonGroupModule,
    FormModule,
  ],
  declarations: [
    FunksionalGrouplarinTeyiniComponent
  ]
})
export class AnbarModule {
}
