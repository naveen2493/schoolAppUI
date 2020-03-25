import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../members/home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'homework',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/homework/homework.module').then(m => m.HomeworkPageModule)
          }
        ]
      },
      {
        path: 'timetable',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/timetable/timetable.module').then(m => m.TimetablePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
