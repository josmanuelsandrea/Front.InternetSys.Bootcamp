import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../api/client.service';

@Component({
  selector: 'app-register-client',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-client.component.html',
  styleUrl: './register-client.component.css'
})
export class RegisterClientComponent {
  constructor(
    private http:HttpClient, 
    private clientS: ClientService
  ){}

  // Controladores de formulario para el formulario del cliente
  identification = new FormControl('')
  name = new FormControl('')
  lastname = new FormControl('')
  email = new FormControl('')
  phonenumber = new FormControl('')
  address = new FormControl('')
  referenceaddress = new FormControl('')

  ngOnInit(){
    this.identification.valueChanges.subscribe(newValue => {
      if (newValue?.length === 10) {
        this.clientS.getClientbyIdentification(newValue).subscribe((response: any) => {
          if (response.data.identification !== "0000000000"){
            alert("El cliente ya se encuentra registrado");
            return;
          }
        })
      }
    });
  }


  createClient(){
    this.http.post("https://localhost:7102/api/Client/", {
      identification: this.identification.value,
      name: this.name.value,
      lastname: this.lastname.value,
      email: this.email.value,
      phonenumber: this.phonenumber.value,
      address: this.address.value,
      referenceaddress: this.referenceaddress.value
    }).subscribe((response: any) => {
      if (response.statusCode == 200) {
        alert("Se ha registrado el cliente correctamente");
      }
      else {
        alert("No se ha podido registrar el cliente");
      }
    })
  }
}