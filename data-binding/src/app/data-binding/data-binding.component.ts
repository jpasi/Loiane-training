import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  urlImg = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'

  valorAtual: string = '';
  valorSalvo
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  nome: string = "abc";
  pessoa: any = {
    nome: 'jp',
    idade: 32
  }


  url: string = 'http://loiane.com';

  getValor() {
    return 1
  }

  botaoClicado() {
      alert('Botão Clicado!')
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  
  }

}
