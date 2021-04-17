import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//Importar os componentes
import { HomeComponent } from './componentes/home/home.component';
import { HeroisComponent } from './componentes/herois/herois.component';
import { ViloesComponent } from './componentes/viloes/viloes.component';

// Se cria uma constante tipo Route e se criam as rotas assim:
const ROUTES: Routes = [
  {path:'', component: HomeComponent},
  {path:'herois', component:HeroisComponent},
  {path:'viloes', component:ViloesComponent}
];

//Para exportar devemos usar uma constante com o tipo "ModuleWithProviders"...ou seja Módulo com proveedores (vai proveer um mecânismo de rotas) SE LIGA!!!...devo dar o tipo <any>
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(ROUTES, { useHash: true });

//forRoot é porque é uma rota primaria







// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
