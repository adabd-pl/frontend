import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, first } from 'rxjs';
import { EntryService, EntryType, stringToEntryType } from 'src/app/core';
import { Entry } from 'src/app/core/models/entry';
@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.scss'],
})
export class EntryDetailsComponent {
  entryType: EntryType | null = null;
  entryId: Number | null = null; 
  entry: Entry | null = null; 
 
  constructor(private readonly route: ActivatedRoute, private entryService : EntryService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      first()
    ).subscribe(
      paramMap => {
        console.log(paramMap)
        const entryType = paramMap.get('entryType');
        if (entryType) {
          this.entryType = stringToEntryType(entryType);
        }
        const entryId = paramMap.get('id');
        if (entryId) {
          this.entryId = Number(entryId);
       
        }
      }
    );
    this.loadEntry();
     
  }


  loadEntry(): any {
    if (this.entryType !== null && this.entryId !==null) {
       this.entryService.getEntriesByType(this.entryType).subscribe(
        entries => {
          this.entry =  entries.filter((entry) => {
            return entry.entry_id === this.entryId;
          })[0];
        }
      );
    }
  
    if(this.entry === undefined ) console.log("Entry not found!");
  }
}
