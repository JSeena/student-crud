import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from '../app/services/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../app/core/core.service';
import { HomeComponent } from '../app/home/home.component';
import { ConfirmDialogComponent } from '../app/confirm-dialog/confirm-dialog.component';
import { StudentFormComponent } from '../app/student-form/student-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})

export class AppComponent {
  displayedColumns: string[] = [
    'id',
    'nome',
    'action',
  ];
  
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _stdService: StudentService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getStudentForm();
    this.openDialog();
  }

  //Abre o diálogo sobre o CRUD
  openDialog() {
    this._dialog.open(HomeComponent);
  }

  
  //Fecha o diálogo sobre o CRUD
  closeDialog() {
    this._dialog.closeAll()
  }

  
  //Abre o componente de edição de alunos
  openAddEditstdForm() {
    const dialogRef = this._dialog.open(StudentFormComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getStudentForm();
        }
      },
    });
  }

  
  //Função de obter lista de alunos
  getStudentForm() {
    this._stdService.getStudentForm().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  
  //Função de filtrar alunos
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  //Função de deletar alunos
  deleteStudent(id: number) {
    const dialogRef = this._dialog.open(ConfirmDialogComponent, {
      width: '25em',
      data: 'Você tem certeza que deseja excluir este aluno?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this._stdService.deleteStudent(id).subscribe({
          next: (res) => {
            this._coreService.openSnackBar('Aluno excluído!', 'OK!');
            this.getStudentForm();
          },
          error: console.log,
        });
      }
    });
  }

  //Função de editar alunos
  openEditForm(data: any) {
    const dialogRef = this._dialog.open(StudentFormComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getStudentForm();
        }
      },
    });
  }
}