import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ClientService } from '../../api/client.service';

@Component({
  selector: 'app-register-contract',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-contract.component.html',
  styleUrl: './register-contract.component.css'
})
export class RegisterContractComponent {
  constructor(
    private http: HttpClient,
    private ClientS: ClientService
  ) { }

  servicesArray = [
    { id: 1, servicename: '100MB', description: 'Plan basico de datos', price: 25.99 },
    { id: 2, servicename: '500mb', description: 'Plan estandar de datos', price: 37.99 },
    { id: 3, servicename: '1GB', description: 'Plan premium de datos', price: 52.99 },
  ]

  methodPayments = [
    { id: 1, description: "Cash" },
    { id: 2, description: "Credit card" },
  ]

  identification = new FormControl('');
  service = new FormControl(this.servicesArray[0]);
  paymentMethod = new FormControl(this.methodPayments[0]);

  async createContract() {
    if (this.identification.value != null) {
      this.ClientS.getClientbyIdentification(this.identification.value).subscribe((response: any) => {
        if (response.data.identification != "0000000000") {
          let foundClientId = response.data.clientid;
          var currentDate = new Date();
          this.http.post("https://localhost:7102/api/Contract/", {
            startdate: new Date(Date.now()),
            enddate: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()),
            serviceServiceid: this.service.value,
            statuscontractStatusid: "ACT",
            clientClientid: foundClientId,
            methodpaymentMethodpaymentid: this.paymentMethod.value
          }).subscribe((response: any) => {
            if (response.statusCode == 200) {
              alert("Se ha registrado el contrato correctamente");
            }
            else {
              alert("No se ha podido registrar el contrato");
            }
          })
        } else {
          alert("El cliente no se encuentra registrado");
        }
      })
    }
  }
}
