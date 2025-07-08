import { createReducer, on } from '@ngrx/store';
import { updateMessage } from './app.actions';

export const initialState = {
  message: 'Hello, World!'
};

export const appReducer = createReducer(
  initialState,
  on(updateMessage, (state, { message }) => ({ ...state, message }))
);