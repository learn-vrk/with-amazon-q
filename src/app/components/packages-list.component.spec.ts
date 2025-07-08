import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { PackagesListComponent } from './packages-list.component';
import { loadPackages } from '../store/app.actions';

describe('PackagesListComponent', () => {
  let component: PackagesListComponent;
  let fixture: ComponentFixture<PackagesListComponent>;
  let store: jasmine.SpyObj<Store>;

  beforeEach(async () => {
    const storeSpy = jasmine.createSpyObj('Store', ['select', 'dispatch']);

    await TestBed.configureTestingModule({
      imports: [PackagesListComponent],
      providers: [
        { provide: Store, useValue: storeSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PackagesListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as jasmine.SpyObj<Store>;
  });

  it('should create', () => {
    store.select.and.returnValue(of([]));
    expect(component).toBeTruthy();
  });

  it('should dispatch loadPackages on init', () => {
    store.select.and.returnValue(of([]));
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(loadPackages());
  });

  // it('should display loading message', () => {
  //   let callCount = 0;
  //   store.select.and.callFake(() => {
  //     callCount++;
  //     if (callCount === 1) return of([]);     // packages
  //     if (callCount === 2) return of(true);   // loading
  //     return of(null);                        // error
  //   });
  //   fixture.detectChanges();
  //   expect(fixture.nativeElement.innerHTML).toContain('Loading packages');
  // });

  // it('should display error message', () => {
  //   const error = 'Network error';
  //   let callCount = 0;
  //   store.select.and.callFake(() => {
  //     callCount++;
  //     if (callCount === 1) return of([]);     // packages
  //     if (callCount === 2) return of(false);  // loading
  //     return of(error);                       // error
  //   });
  //   fixture.detectChanges();
  //   expect(fixture.nativeElement.innerHTML).toContain(error);
  // });

  // it('should display packages', () => {
  //   const packages = [
  //     {
  //       name: 'nginx',
  //       origin: 'core',
  //       version: '1.21.6',
  //       release: '20220308141834',
  //       platforms: ['x86_64-linux'],
  //       maintainer: 'The Habitat Maintainers',
  //       created_at: '2022-03-08T14:18:34Z',
  //       updated_at: '2022-03-08T14:18:34Z'
  //     }
  //   ];
  //   let callCount = 0;
  //   store.select.and.callFake(() => {
  //     callCount++;
  //     if (callCount === 1) return of(packages); // packages
  //     if (callCount === 2) return of(false);    // loading
  //     return of(null);                          // error
  //   });
  //   fixture.detectChanges();
  //   expect(fixture.nativeElement.innerHTML).toContain('nginx');
  // });
});