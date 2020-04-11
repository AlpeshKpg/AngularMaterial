import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Note } from './../../Models/Notes.model'; 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  NoteList: Array<Note> = [];
  frmNote: FormGroup;
  CurrentRecID = 0;
  public error: string;

  constructor(private fb: FormBuilder) { 
    this.error = "";    
    this.NoteList.push({'ID': 1,'Title':'FirstTitle','Body':'FirstBody'},
    {'ID': 2,'Title':'SecTitle','Body':'df df f'},
    {'ID': 3,'Title':'asdf','Body':'fg  dfgody'},
    {'ID': 4,'Title':'weg sd','Body':'d gjsdfgas sd'},
    {'ID': 5,'Title':'df sdf dsfgtTitle','Body':'s fgdhwerf sd'},
    {'ID': 6,'Title':'Firsf  tTi df tle','Body':'saeregba'});  
    
    this.SetForm();
  }

  SetForm() {
    this.frmNote = this.fb.group({
      Title: ['', Validators.required],
      Body: ['']
    });
  }

  ngOnInit() {
  }

  FillDetail(index:number){
    this.CurrentRecID = this.NoteList[index].ID;
    this.frmNote.patchValue(this.NoteList[index]);
  }

  SetFormForAddNote()
  {
    this.CurrentRecID = 0;
    this.SetForm();
  }

  DeleteNote(index:number){
    this.NoteList.splice(index, 1);    
  }

  saveNote(){
    Object.keys(this.frmNote.value).forEach(field => {
      this.frmNote.get(field).markAsTouched();
    });

    if (this.frmNote.valid) {
      let Title = this.frmNote.controls.Title.value;
      let Body = this.frmNote.controls.Body.value;
      
      if(this.CurrentRecID > 0){
        var foundIndex = this.NoteList.findIndex(x => x.ID == this.CurrentRecID);
        this.NoteList[foundIndex].Title= Title ; 
        this.NoteList[foundIndex].Body= Body ;
      }
      else{
        this.NoteList.push({'ID': 1,'Title':Title,'Body':Body});
      }
    }
  }

  
  getErrorCSS(fieldName: string) {
    {
      return {
        'has-error': (
          !this.frmNote.get(fieldName).valid ||
          this.frmNote.get(fieldName).touched
        )
      };
    }
  }


}
