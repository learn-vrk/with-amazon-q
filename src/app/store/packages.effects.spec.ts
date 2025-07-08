import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { PackagesEffects } from './packages.effects';
import { HabitatService } from '../services/habitat.service';
import { loadPackages, loadPackagesSuccess, loadPackagesFailure } from './app.actions';

describe('PackagesEffects', () => {
  let actions$: Observable<any>;
  let effects: PackagesEffects;
  let habitatService: jasmine.SpyObj<HabitatService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HabitatService', ['getPackages']);

    TestBed.configureTestingModule({
      providers: [
        PackagesEffects,
        provideMockActions(() => actions$),
        { provide: HabitatService, useValue: spy }
      ]
    });

    effects = TestBed.inject(PackagesEffects);
    habitatService = TestBed.inject(HabitatService) as jasmine.SpyObj<HabitatService>;
  });

  it('should return loadPackagesSuccess on successful API call', () => {
    const packages = [{ name: 'nginx', origin: 'core', version: '1.21.6', release: '20220308141834', platforms: ['x86_64-linux'], maintainer: 'The Habitat Maintainers', created_at: '2022-03-08T14:18:34Z', updated_at: '2022-03-08T14:18:34Z' }];
    const response = { data: packages };
    
    habitatService.getPackages.and.returnValue(of(response));
    actions$ = of(loadPackages());

    effects.loadPackages$.subscribe(action => {
      expect(action).toEqual(loadPackagesSuccess({ packages }));
    });
  });

  it('should return loadPackagesFailure on API error', () => {
    const error = new Error('Network error');
    
    habitatService.getPackages.and.returnValue(throwError(() => error));
    actions$ = of(loadPackages());

    effects.loadPackages$.subscribe(action => {
      expect(action).toEqual(loadPackagesFailure({ error: error.message }));
    });
  });
});