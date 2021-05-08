import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [{ path: '', loadChildren: './home/home.module#HomeModule'}];
// const routes: Routes = [{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }];
const routes: Routes = [{ path: '', loadChildren: async () => (await import('./home/home.module')).HomeModule},
{ path: 'blog', loadChildren: async () => (await import('./blog/blog.module')).BlogModule },
{ path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
