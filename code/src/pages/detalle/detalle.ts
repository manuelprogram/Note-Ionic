import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../servicio/notes.service';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  note = { id: null, title: null, description: null };
  id = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public NotesService: NotesService) {
    this.id = navParams.get('id');
    if(this.id!=0){
      this.note = NotesService.Getnote(this.id);
    }
  }

  AddNote() {
    this.note.id=Date.now();
    this.NotesService.AddNote(this.note);
    alert('Agregado con exito');
    this.navCtrl.pop();
  }

  EditNote() {
    this.NotesService.EditNotes(this.note);
    alert('Editado con exito');
    this.navCtrl.pop();
  }


  DeleteNote() {
    var cadena;
    if(confirm('¿Desea Eliminar?')){
      this.NotesService.DeleteNote(this.id);
      console.log(this.id);
      cadena='eliminada';
    }else{
      cadena='ok';
    }
    alert(cadena);
    this.navCtrl.pop();
  }

}
