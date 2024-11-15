import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },

];

const routerOptions: ExtraOptions = {
	scrollPositionRestoration: 'enabled', // Restaurar a posição de rolagem ao navegar
	anchorScrolling: 'enabled',           // Habilitar rolagem suave para âncoras
	scrollOffset: [0, 64]                 // Offset opcional, ajuste para barras de navegação fixas
};

@NgModule({
	imports: [RouterModule.forRoot(routes, routerOptions)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
