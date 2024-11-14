import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';

  constructor() { }

  ngOnInit(): void { }

  getWhatsAppLink(): string {
    const baseURL = 'https://wa.me/5583991088411';
    const text = `Oi Gustavo, tudo bem? Vi o seu portfólio. Nome: ${this.name}, Email: ${this.email}, Telefone: ${this.phone}, Mensagem: ${this.message}`;
    return `${baseURL}?text=${encodeURIComponent(text)}`;
  }

  handleSubmit(): void {
    alert('Mensagem enviada!');
  }
}
