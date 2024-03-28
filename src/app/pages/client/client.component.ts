import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ClientService } from '../../api/client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})


export class ClientComponent {

  cedula: string = '';

  validarCedula(cedula: string): string {
    if (cedula.trim().length == 0) {
      return "0000000000";
    }
    return cedula;
  }

}
