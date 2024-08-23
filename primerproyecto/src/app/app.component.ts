import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaComponent } from "./pages/pagina/pagina.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo';

  name:string = "";
  email:string = "";

  enviar(){
    this.name = (<HTMLInputElement>document.getElementById("name")).value;
    this.email = (<HTMLInputElement>document.getElementById("email")).value;

    let nuevoItem = document.createElement("li");
    nuevoItem.textContent = "Nombre: " + this.name + ", Email: " + this.email;

    document.getElementById("formData")?.appendChild(nuevoItem);

  }

}