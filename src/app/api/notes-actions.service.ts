import { Note } from './../model/note';
import { EditNoteComponent } from './../board/edit-note/edit-note.component';
import { NotesService } from './notes.service';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddNoteComponent } from '../board/add-note/add-note.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesActions {

  dialogRef: MatDialogRef<AddNoteComponent | EditNoteComponent>;
  dialogClosed$: Observable<Note | undefined>;

  constructor(private notesService: NotesService, private dialog: MatDialog) { }

  addNote() {
    this.dialogRef = this.dialog.open(AddNoteComponent, {
      height: '430px',
      width: '430px',
      data: { name: '', content: '' },
    });

    this.dialogClosed$ = this.dialogRef.afterClosed();
    this.dialogClosed$.subscribe((note: Note) => {
      if (note !== undefined) {
        note.date = new Date();
        this.notesService.addNote(note);
      }
    })
  }

  editNote(note: Note) {
    this.dialogRef = this.dialog.open(EditNoteComponent, {
      height: '430px',
      width: '430px',
      data: { name: note.name, content: note.content, date: note.date },
    });

    this.dialogClosed$ = this.dialogRef.afterClosed();
    this.dialogClosed$.subscribe((editedNote: Note) => {
      if (editedNote) {
        this.notesService.updateNote(editedNote);
      }
    })
  }
}
