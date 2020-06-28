import { NotesActions } from './../api/notes-actions.service';
import { Note } from './../model/note';
import { NotesService } from './../api/notes.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  notes$: Observable<Note[]>;

  constructor(private notesService: NotesService, private notesActions: NotesActions) { }

  ngOnInit() {
    this.notes$ = this.notesService.getNotes();
  }

  clearAll() {
    this.notesService.clearAll();
  }

  addNote() {
    this.notesActions.addNote();
  }

  editNote(note: Note) {
    this.notesActions.editNote(note);
  }

  deleteNote(note: Note) {
    this.notesService.deleteNote(note);
  }

}
