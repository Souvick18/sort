import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from './app.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/settings',
    pathMatch: 'full'
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  // },
  // {
  //   path: 'home',
  //   canActivate: [AppGuard],
  //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  // },
  // {
  //   path: 'user',
  //   canActivate: [AppGuard],
  //   loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  // },
  // {
  //   path: 'prospect',
  //   canActivate: [AppGuard],
  //   loadChildren: () => import('./prospect/prospect.module').then(m => m.ProspectModule),
  // },
  // {
  //   path: 'prospect/:prospectId',
  //   canActivate: [AppGuard],
  //   loadChildren: () => import('./prospect-detail/prospect-detail.module').then(m => m.ProspectDetailModule),
  // },
  {
    path: 'settings',
    // canActivate: [AppGuard],
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
  },
  // {
  //   path: 'campaign',
  //   canActivate: [AppGuard],
  //   loadChildren: () => import('./campaign/campaign.module').then(m => m.CampaignModule),
  // },
  // {
  //   path: 'campaign/:campaignId',
  //   canActivate: [AppGuard],
  //   loadChildren: () => import('./campaign-detail/campaign-detail.module').then(m => m.CampaignDetailModule),
  // },
  // {
  //   path: 'campaign/:campaignId/step/:stepId',
  //   canActivate: [AppGuard],
  //   loadChildren: () => import('./campain-step-details/campaign-step-details.module').then(m => m.CampaignStepDetailsModule),
  // },
  // {
  //   path: 'campaign-email-unsub/:logParams',
  //   loadChildren: () => import('./campaign-unsubscribe/campaign-unsubscribe.module').then(m => m.CampaignUnsubscribeModule),
  // },
  // {
  //   path: '**',
  //   loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
