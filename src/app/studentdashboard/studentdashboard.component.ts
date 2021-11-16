import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { StudentModel } from './studentdashboard.model';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {

  formValue !: FormGroup;
  studentModelobj : StudentModel = new StudentModel();
  studentData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;

  constructor(private formbuilder: FormBuilder,
    private api : ApiService) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      studentname : [''],
      studentemail : [''],
      branch : [''],
      course : [''],
      mobile : ['']
    })
    this.getAllStudent();
  }
  clickAddStudent(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postStudentDetails(){
    this.studentModelobj.studentname = this.formValue.value.studentname;
    this.studentModelobj.studentemail = this.formValue.value.studentemail;
    this.studentModelobj.branch = this.formValue.value.branch;
    this.studentModelobj.course = this.formValue.value.course;
    this.studentModelobj.mobile = this.formValue.value.mobile;

    this.api.postStudent(this.studentModelobj)
    .subscribe(res=>{
      console.log(res);
      alert("Student added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllStudent();
    },
    err=>{
      alert("Something went wrong");
    })
  }
  getAllStudent(){
    this.api.getStudent()
    .subscribe(res=>{
       this.studentData = res;
    })
  }
  deleteStudent(row : any){
    this.api.deleteStudent(row.id)
    .subscribe(res=>{
      alert("Student Deleted");
      this.getAllStudent();
    })
  }
  onEdit(row : any){
    this.showAdd = false;
    this.showUpdate = true;

    this.studentModelobj.id = row.id;
    this.formValue.controls['studentname'].setValue(row.studentname);
    this.formValue.controls['studentemail'].setValue(row.studentemail);
    this.formValue.controls['branch'].setValue(row.branch);
    this.formValue.controls['course'].setValue(row.course);
    this.formValue.controls['mobile'].setValue(row.mobile);
  }

  updateStudentDetails(){
    this.studentModelobj.studentname = this.formValue.value.studentname;
    this.studentModelobj.studentemail = this.formValue.value.studentemail;
    this.studentModelobj.branch = this.formValue.value.branch;
    this.studentModelobj.course = this.formValue.value.course;
    this.studentModelobj.mobile = this.formValue.value.mobile;

    this.api.updateStudent(this.studentModelobj,this.studentModelobj.id)
    .subscribe(res=>{
      alert("Data Updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllStudent();
    })
  }
}
