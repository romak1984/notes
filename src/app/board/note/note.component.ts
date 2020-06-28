import { Note } from './../../model/note';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note: Note;
  @Output() delete: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() edit: EventEmitter<Note> = new EventEmitter<Note>();

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    this.edit.emit(this.note);
  }

  onDelete($event) {
    $event.stopPropagation();
    this.delete.emit(this.note);
  }

}
