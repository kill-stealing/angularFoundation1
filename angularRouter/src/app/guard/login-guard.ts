import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export class LoginGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const loggedIn: boolean = Math.random() < 0.5;
        if (!loggedIn) {
            console.log('未登录');
        }
        return loggedIn;
    }

}
