import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrolleesComponent } from "./component/enrollees/enrollees.component";
import { SearchComponent } from "./component/search/search.component";
import { UpdateComponent } from "./component/update/update.component";
import { HomeComponent } from "./component/home/home.component";


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'enrollees',component:EnrolleesComponent},
  {path:'search',component:SearchComponent},
  {path:'update',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
