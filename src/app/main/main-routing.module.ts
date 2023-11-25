import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTowComponent } from './page-tow/page-tow.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageFourComponent } from './page-four/page-four.component';
import { PagefiveComponent } from './pagefive/pagefive.component';

const routes: Routes = [ 

{ path: '', redirectTo: 'home', pathMatch: 'full'},

{path: 'home' ,component:HomeComponent},
{path: 'pageone', component:PageOneComponent},
{path: 'pagetow', component:PageTowComponent},
{path: 'pagethree', component:PageThreeComponent},
{path: 'pagefour', component:PageFourComponent},
{path: 'pagefive', component:PagefiveComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
