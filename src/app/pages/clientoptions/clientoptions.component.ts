import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Client } from '../../interfaces/client';
import { Observable } from 'rxjs';
import { ClientService } from '../../api/client.service';
import { Attentiontype } from '../../interfaces/attentiontype';
import { AttentiontypeService } from '../../api/attentiontype.service';
import { TurnService } from '../../api/turn.service';

@Component({
  selector: 'app-clientoptions',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './clientoptions.component.html',
  styleUrl: './clientoptions.component.css'
})
export class ClientoptionsComponent implements OnInit {
  public client$!: Observable<Client>;
  public attentionType$!: Observable<Attentiontype>;
  @Input()
  id: string = '';

  attentionTypeService:Attentiontype[]= []
  cliente: Client = {
    clientid: 0,
    identification: '',
    name: '',
    lastname: '',
    email: '',
    address: '',
    phonenumber: '',
    referenceaddress: ''
  };
 
  constructor(
    private ser: ClientService,
    private attTypeS: AttentiontypeService,
    
    private router: Router
  ) { }

  ngOnInit() {
    
    var attentionT = this.attTypeS.getAttentionType().subscribe((response:any)=>{
      this.attentionTypeService = response.data;
     
    });

    var client = this.ser.getClientbyIdentification(this.id).subscribe((response:any)=>{
      console.log(response.data)
      this.cliente = {
        clientid: response.data.clientid,
        identification: response.data.identification,
        name: response.data.name,
        lastname: response.data.lastname,
        email: response.data.email,
        address: response.data.address,
        phonenumber: response.data.phoneNumber,
        referenceaddress: response.data.referenceAddress
      };
      
    });
  }
  postData(attentionType: string,clientId: number) {
    console.log(attentionType)
    console.log(clientId)
    this.router.navigate(['/turn', attentionType, clientId]);
    // Emite un evento con los datos seleccionados
   // this.atencionClienteService.enviarDatos(clienteId, tipoAtencionId);
  }

}
