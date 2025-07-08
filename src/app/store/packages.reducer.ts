import { createReducer, on } from '@ngrx/store';
import { loadPackages, loadPackagesSuccess, loadPackagesFailure } from './app.actions';
import { HabitatPackage } from '../models/package.model';

export interface PackagesState {
  items: HabitatPackage[];
  loading: boolean;
  error: string | null;
}

export const initialPackagesState: PackagesState = {
  items: [],
  loading: false,
  error: null
};

export const packagesReducer = createReducer(
  initialPackagesState,
  on(loadPackages, (state) => ({ ...state, loading: true, error: null })),
  on(loadPackagesSuccess, (state, { packages }) => ({ 
    ...state, 
    items: packages, 
    loading: false, 
    error: null 
  })),
  on(loadPackagesFailure, (state, { error }) => ({ 
    ...state, 
    loading: false, 
    error 
  }))
);