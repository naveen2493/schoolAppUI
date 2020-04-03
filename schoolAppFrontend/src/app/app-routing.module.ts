import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginPage } from './pages/login/login.page';
import { ReportCardPage } from './pages/report-card/report-card.page';
import { ExamSyllabusPage } from './pages/exam-syllabus/exam-syllabus.page';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: 'members',
    canActivate: [AuthGuard],
    loadChildren: './members/member-routing.module#MemberRoutingModule'
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: '',
  //   loadChildren: () =>
  //   import('../app/pages/home/home.module').then(m => m.HomePageModule)
  //   // import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  {
    path: 'attendence',
    loadChildren: () => import('./pages/attendence/attendence.module').then( m => m.AttendencePageModule)
  },
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./members/home/home.module').then(m => m.HomePageModule)
  // },
  {
    path: 'homework',
    loadChildren: () =>
      import('../app/pages/homework/homework.module').then(m => m.HomeworkPageModule)
  },
  {
    path: 'timetable',
    loadChildren: () =>
      import('../app/pages/timetable/timetable.module').then(m => m.TimetablePageModule)
  },
  {
    path: 'homework-details',
    loadChildren: () => import('./pages/homework-details/homework-details.module').then( m => m.HomeworkDetailsPageModule)
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  {
    path: 'eventspage',
    loadChildren: () => import('../app/pages/events-page/events-page.module').then( m => m.EventsPageModule)
  },
  {
    path: 'performance',
    loadChildren: () => import('./pages/performance/performance.module').then( m => m.PerformancePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./members/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'report-card',
    loadChildren: () => import('../app/pages/report-card/report-card.module').then( m => m.ReportCardPageModule)
  },
  {
    path: 'exam-syllabus',
    loadChildren: () => import('./pages/exam-syllabus/exam-syllabus.module').then( m => m.ExamSyllabusPageModule)
  },
  {
    path: 'exam-dates',
    loadChildren: () => import('./pages/exam-dates/exam-dates.module').then( m => m.ExamDatesPageModule)
  },
  {
    path: 'syllabus-details',
    loadChildren: () => import('./pages/syllabus-details/syllabus-details.module').then( m => m.SyllabusDetailsPageModule)
  },
  {
    path: 'about-school',
    loadChildren: () => import('./pages/about-school/about-school.module').then( m => m.AboutSchoolPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pages/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'fees-details',
    loadChildren: () => import('./pages/fees-details/fees-details.module').then( m => m.FeesDetailsPageModule)
  },
  {
    path: 'teachers-details',
    loadChildren: () => import('./pages/teachers-details/teachers-details.module').then( m => m.TeachersDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
