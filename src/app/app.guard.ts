import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(private appRouter: Router) { }

  canActivate(): boolean {
    if (localStorage) {
      const loggedIn = !!localStorage.getItem('bfs_map_uid');
      if (loggedIn) {
        return true;
      }
    }
    this.appRouter.navigate(['/login']);
    return false;
  }
}

