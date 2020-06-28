import { Note } from './../../model/note';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  dialogRef: MatDialogRef<EditNoteComponent>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Note) { }

  ngOnInit() {
  }

}
