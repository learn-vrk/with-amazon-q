import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { HabitatService } from '../services/habitat.service';
import { loadPackages, loadPackagesSuccess, loadPackagesFailure } from './app.actions';

@Injectable()
export class PackagesEffects {
  loadPackages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPackages),
      switchMap(() =>
        this.habitatService.getPackages().pipe(
          map(response => loadPackagesSuccess({ packages: response.data })),
          catchError(error => of(loadPackagesFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private habitatService: HabitatService
  ) {}
}