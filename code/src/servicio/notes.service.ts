import{ Injectable } from '@angular/core';

@Injectable()

export class NotesService{
    notes = [
        { id: '1', title: 'Nota 1', description: 'Descripción de nota 1' },
        { id: '2', title: 'Nota 2', description: 'Descripción de nota 2' },
        { id: '3', title: 'Nota 3', description: 'Descripción de nota 3' }
    
      ];
      public GetNotes(){
          return this.notes;
      }
}