import { createAction, props } from '@ngrx/store';

export const updateMessage = createAction(
  '[App] Update Message',
  props<{ message: string }>()
);