import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent }
    // path: 'landing', canActivate: [AuthGaurd], component: LandingComponent, children: [
    //   { path: '', component: DashboardComponent, outlet: 'outlet' },
    //   { path: 'dashboard', component: DashboardComponent, outlet: 'outlet' },
    //   { path: 'user', component: UserComponent, outlet: 'outlet' },
    //   { path: 'payments', component: PaymentsComponent, outlet: 'outlet' },
    //   { path: 'paymenthistory', component: PaymentHistoryComponent, outlet: 'outlet' },
    //   { path: 'ledger', component: LedgerComponent, outlet: 'outlet' },
    //   { path: 'feeallocation', component: FeesComponent, outlet: 'outlet' }
    // ]
  ,
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
