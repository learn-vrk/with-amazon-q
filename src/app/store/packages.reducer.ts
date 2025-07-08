import { createReducer, on } from '@ngrx/store';
import { loadPackages, loadPackagesSuccess, loadPackagesFailure } from './app.actions';
import { HabitatPackage } from '../models/package.model';

/** State interface for packages feature */
export interface PackagesState {
  /** Array of loaded packages */
  items: HabitatPackage[];
  /** Loading state indicator */
  loading: boolean;
  /** Error message if any */
  error: string | null;
}

/** Initial state for packages */
export const initialPackagesState: PackagesState = {
  items: [],
  loading: false,
  error: null
};

/** Reducer for handling packages state changes */
export const packagesReducer = createReducer(
  initialPackagesState,
  // Set loading state when packages are requested
  on(loadPackages, (state) => ({ ...state, loading: true, error: null })),
  // Store packages and clear loading state on success
  on(loadPackagesSuccess, (state, { packages }) => ({ 
    ...state, 
    items: packages, 
    loading: false, 
    error: null 
  })),
  // Store error and clear loading state on failure
  on(loadPackagesFailure, (state, { error }) => ({ 
    ...state, 
    loading: false, 
    error 
  }))
);