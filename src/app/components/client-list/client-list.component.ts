import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private clientService:ClientService,private router:Router) { }

  clients: Array<any> = [];

  messageError:string = undefined;

  removeForm: FormGroup = new FormGroup({
    client:new FormControl("",[Validators.required])
  })

  ngOnInit(): void {
    this.loadingList();
  }

  get client(){
    return this.removeForm.get("client").value;
  }

  async loadingList(){
     try {
      this.clients = await this.clientService.getAll();
     } catch (error) {
       console.log(error);
     }
  }
  remove(){
    this.clientService.delete(this.client)
    .then((result)=> {
      this.loadingList();
    }).catch((err)=>{
      this.messageError = "No se pudo eliminar, revise que el cliente sea existente.";
    });
  }
}
