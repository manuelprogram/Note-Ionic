import { Injectable } from '@angular/core';

@Injectable()

export class NotesService {
    notes = [
        { id: '1', title: 'Nota 1', description: 'Descripción de nota 1' },
        { id: '2', title: 'Nota 2', description: 'Descripción de nota 2' },
        { id: '3', title: 'Nota 3', description: 'Descripción de nota 3' }

    ];
    public GetNotes() {
        return this.notes;
    }

    public Getnote(id) {
        return this.notes.filter(function (e, i) { return e.id == id })[0] ||  {id:null,title:null,description:null};
    }

    public AddNote(note){
        this.notes.push(note);
    }

    public DeleteNote(id){
        for(let i=0; i < this.notes.length; i++){
            if(this.notes[i].id==id){
                this.notes.splice(i,1);
            }
        }
    }
    
    public EditNotes(note){
        for(let i=0; i < this.notes.length; i++){
            if(this.notes[i].id==note.id){
                this.notes[i]=note;
            }
        }
    }
}