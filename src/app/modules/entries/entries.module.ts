import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material-module';
import { SharedModule } from 'src/app/shared/shared.module';

import { EntriesRoutingModule } from './entries-routing.module';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { EntryAddComponent } from './components/entry-add/entry-add.component';
import { EntryDetailsComponent } from './components/entry-details/entry-details.component';


@NgModule({
  declarations: [
    EntryListComponent,
    EntryAddComponent,
    EntryDetailsComponent
  ],
  imports: [
    CommonModule,
    EntriesRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class EntriesModule { }
