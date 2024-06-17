import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentService } from '../services/student.service';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent {
  stdForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _stdService: StudentService,
    private _dialogRef: MatDialogRef<StudentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.stdForm = this._fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      ddn: ['', Validators.required],
      curso: ['', Validators.required],
    });

    if (this.data) {
      this.stdForm.patchValue(this.data);
    }
  }

  onFormSubmit() {
    if (this.stdForm.valid) {
      if (this.data) {
        this._stdService
          .updateStudent(this.data.id, this.stdForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Dados atualizados!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._stdService.addStudent(this.stdForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Aluno cadastrado com sucesso!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
