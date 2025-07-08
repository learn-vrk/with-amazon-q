import { createAction, props } from '@ngrx/store';
import { HabitatPackage } from '../models/package.model';

export const updateMessage = createAction(
  '[App] Update Message',
  props<{ message: string }>()
);

export const loadPackages = createAction('[Packages] Load Packages');

export const loadPackagesSuccess = createAction(
  '[Packages] Load Packages Success',
  props<{ packages: HabitatPackage[] }>()
);

export const loadPackagesFailure = createAction(
  '[Packages] Load Packages Failure',
  props<{ error: string }>()
);