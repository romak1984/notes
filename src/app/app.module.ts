import { EditNoteComponent } from './board/edit-note/edit-note.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AddNoteComponent } from './board/add-note/add-note.component';

import { MatDialogModule } from '@angular/material/dialog';
import { NoteComponent } from './board/note/note.component';

import { EllipsisModule } from 'ngx-ellipsis';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    AddNoteComponent,
    EditNoteComponent,
    NoteComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    EllipsisModule
  ],
  providers: [],
  entryComponents: [AddNoteComponent, EditNoteComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
