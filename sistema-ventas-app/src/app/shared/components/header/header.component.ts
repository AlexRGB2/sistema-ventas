import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { AuthService } from '../../../pages/auth/services/auth.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggleSidenav = new EventEmitter<void>();

  isLogged = false;
  data: any = {};
  private destroy$ = new Subject<any>();

  constructor(private authSvc: AuthService) {}

  ngOnInit(): void {
    // * Obtener la variale para indicar si tiene una sesión.
    this.authSvc.isLogged$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isLogged: boolean) => {
        this.isLogged = isLogged;
      });

    //* Obtener información del usuario.
    this.authSvc.tokenData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        this.data = data;
      });
  }

  onLogout() {
    this.authSvc.logOut();
  }

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }
}
