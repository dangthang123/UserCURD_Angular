import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot): boolean {
    const expectedRoles = route.data.expectedRole as string[];

    if (this.tokenService.isTokenValid()) {
      const userRoles = this.tokenService.getUserRoles();

      if (userRoles && expectedRoles.includes(userRoles)) {
        return true;
      }
    }
    this.router.navigate(['/dashboard']);
    return false;
  }

}
