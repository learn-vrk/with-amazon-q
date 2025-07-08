import { packagesReducer, initialPackagesState } from './packages.reducer';
import { loadPackages, loadPackagesSuccess, loadPackagesFailure } from './app.actions';

describe('PackagesReducer', () => {
  it('should return initial state', () => {
    const action = { type: 'Unknown' };
    const state = packagesReducer(undefined, action);
    expect(state).toBe(initialPackagesState);
  });

  it('should handle loadPackages', () => {
    const action = loadPackages();
    const state = packagesReducer(initialPackagesState, action);
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should handle loadPackagesSuccess', () => {
    const packages = [
      {
        name: 'nginx',
        origin: 'core',
        version: '1.21.6',
        release: '20220308141834',
        platforms: ['x86_64-linux'],
        maintainer: 'The Habitat Maintainers',
        created_at: '2022-03-08T14:18:34Z',
        updated_at: '2022-03-08T14:18:34Z'
      }
    ];
    const action = loadPackagesSuccess({ packages });
    const state = packagesReducer(initialPackagesState, action);
    expect(state.loading).toBe(false);
    expect(state.items).toEqual(packages);
    expect(state.error).toBe(null);
  });

  it('should handle loadPackagesFailure', () => {
    const error = 'Network error';
    const action = loadPackagesFailure({ error });
    const state = packagesReducer(initialPackagesState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(error);
  });
});