import { Note } from './../model/note';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private notes: Note[];
  private notes$: BehaviorSubject<Note[]> = new BehaviorSubject(JSON.parse(localStorage.getItem('notes')) || []);

  constructor() {
    this.notes = JSON.parse(localStorage.getItem('notes')) || [];
  }

  getNotes(): Observable<Note[]> {
    return  this.notes$.asObservable();
  }

  clearAll() {
    this.notes = [];
    localStorage.clear();
    this.notes$.next([]);
  }

  addNote(note: Note) {
    this.notes.push(note);
    localStorage.setItem('notes', JSON.stringify(this.notes));
    this.notes$.next(this.notes);
  }

  updateNote(noteToUpdate: Note) {
    const item = this.notes.find((item: Note) => noteToUpdate.date === item.date);
    item.content = noteToUpdate.content;
    localStorage.setItem('notes', JSON.stringify(this.notes));
    this.notes$.next(this.notes);
  }

  deleteNote(noteToDelete: Note) {
    this.notes = this.notes.filter(item => noteToDelete.date !== item.date);
    localStorage.setItem('notes', JSON.stringify(this.notes));
    this.notes$.next(this.notes);
  }
}
