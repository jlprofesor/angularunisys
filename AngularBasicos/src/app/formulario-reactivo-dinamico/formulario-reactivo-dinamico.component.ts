import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo-dinamico',
  templateUrl: './formulario-reactivo-dinamico.component.html',
  styleUrls: ['./formulario-reactivo-dinamico.component.css']
})
export class FormularioReactivoDinamicoComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    bandas: this.fb.array(
      [
        ['U2', Validators.required],
        ['Coldplay', Validators.required]
      ],
      Validators.required
    )
  });

  // myForm = this.formBuilder.group({
  //   idPedido: ['', [Validators.required, Validators.maxLength(10)]],
  //   proveedores_IdProveedor: [null, [Validators.required]],
  //   obras_IdObra: [null, [Validators.required]],
  //   fechaPedido: [new Date(), [Validators.required]],
  //   fechaRecepcionPrevista: [null],
  //   semanaRecepcionPrevista: [null],
  //   observaciones: ['', Validators.maxLength(500)],
  //   firmas_IdFirma: [null, [Validators.required]],
  //   lineas: this.formBuilder.array([], Validators.required)
  // });

  // get lineasArr(): FormArray {
  //   return this.myForm.get('lineas') as FormArray;
  // }

  // agregarLinea() {
  //   const linea = new FormGroup({
  //     codigo: new FormControl('', [Validators.maxLength(50)]),
  //     unidades: new FormControl(null, [Validators.required, Validators.min(1)]),
  //     descripcion: new FormControl('', [Validators.required, Validators.maxLength(100)]),
  //     colorInterior: new FormControl('', [Validators.maxLength(100)]),
  //     colorExterior: new FormControl('', [Validators.maxLength(100)]),
  //     dimensiones: new FormControl('', [Validators.maxLength(100)])
  //   });

  //   this.lineasArr.push(linea);
  // }

  // <div class="row mt-2">
  //     <label class="col-12">Líneas</label>
  //     <div class="col-12" formArrayName="lineas">
  //       <div class="p-inputgroup mb-2" *ngFor="let _ of lineasArr.controls; let i = index">
  //         <ng-container [formGroupName]="i">
  //           <input pInputText placeholder="Código" type="text" class="mr-2" formControlName="codigo" />
  //           <input pInputText placeholder="Unidades" type="number" class="mr-2 text-right" formControlName="unidades" />
  //           <input pInputText placeholder="Descripción" type="text" class="mr-2" formControlName="descripcion"
  //             style="width: 20%;" />
  //           <input pInputText placeholder="Color interior" class="form-control" class="mr-2" type="text"
  //             formControlName="colorInterior" />
  //           <input pInputText placeholder="Color exterior" class="form-control" class="mr-2" type="text"
  //             formControlName="colorExterior" />
  //           <input pInputText placeholder="Dimensiones" pInputText type="text" class="mr-2"
  //             formControlName="dimensiones" />
  //         </ng-container>
  //         <button class="btn btn-outline-danger" type="button" (click)="borrarLinea(i)"><i
  //             class="pi pi-trash"></i></button>
  //       </div>
  //     </div>
  //   </div>

  // borrarLinea(i: number) {
  //   this.lineasArr.removeAt(i);
  // }

  nuevaBanda: FormControl = this.fb.control('', Validators.required);

  get bandasArr() {
    return this.myForm.get('bandas') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  campoEsValido(campo: string) {
    return this.myForm.controls[campo].errors && this.myForm.controls[campo].touched;
  }

  agregarBanda() {
    if (this.nuevaBanda.invalid) {
      return;
    }

    const existe = this.bandasArr.controls.find((x) => x.value == this.nuevaBanda.value);

    if (existe) {
      alert('Banda existente');
      return;
    }

    this.bandasArr.push(this.fb.control(this.nuevaBanda.value, Validators.required));
    this.nuevaBanda.reset();
  }

  borrar(i: number) {
    this.bandasArr.removeAt(i);
  }

  guardar() {
    if (this.myForm.invalid) {
      return;
    }

    console.log(this.myForm.value);
  }
}
