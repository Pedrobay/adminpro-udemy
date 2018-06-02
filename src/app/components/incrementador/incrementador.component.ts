import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
@ViewChild('txtProgress') txtProgress: ElementRef;
@Input('nombre') leyenda: string = 'Leyenda';
@Input() progreso: number = 50;

@Output() cambiovalor: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('Leyenda', this.leyenda);
    console.log('Progreso', this.progreso);
  }

  ngOnInit() {
    // console.log('Progreso', this.progreso);

  }
  onChanges(newValue: number) {
    // let elemHTML: any = document.getElementsByName('progreso')[0];
   //  console.log(this.txtProgress);
    // console.log(elemHTML.value);
    // console.log(newValue);
    this.cambiovalor.emit( this.progreso );
    if ( newValue >= 100) {
      this.progreso = 100;
    } else  if ( newValue <= 0 ) {
      this.progreso = 0;
    } else {
    this.progreso =  newValue;
    }
    // elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
  }
  cambiarValor (valor: number) {
    if ( this.progreso  + valor >= 0  && this.progreso + valor <= 100 ) {
      this.progreso = this.progreso + valor;
      this.cambiovalor.emit( this.progreso );
      this.txtProgress.nativeElement.focus();0
    }
  }
}
