import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { SessionService } from './session.service';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private sessionService: SessionService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
    ) {
        if (this.sessionService.currentSession) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
