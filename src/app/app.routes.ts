import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ClientoptionsComponent } from './pages/clientoptions/clientoptions.component';
import { ClientComponent } from './pages/client/client.component';
import { TurnComponent } from './pages/turn/turn.component';
import { RegisterClientComponent } from './pages/register-client/register-client.component';
import { RegisterContractComponent } from './pages/register-contract/register-contract.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'client',
    component: ClientComponent
  },
  {
    path: 'clientoptions/:id',
    component: ClientoptionsComponent
  },
  {
    path: 'turn/:attentionType/:clientId',
    component: TurnComponent
  },
  {
    path: 'registerclient',
    component: RegisterClientComponent
  },
  {
    path: 'registercontract',
    component: RegisterContractComponent
  }
];
