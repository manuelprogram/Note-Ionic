import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesService } from '../../servicio/notes.service';
import { DetallePage } from '../detalle/detalle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes = []
  constructor(public navCtrl: NavController, public NotesService: NotesService) {
    this.notes = NotesService.GetNotes();
  }

  public irdetalle(id) {
    this.navCtrl.push(DetallePage, { id });
  }

}
