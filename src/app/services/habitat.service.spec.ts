import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HabitatService } from './habitat.service';
import { HabitatPackage } from '../models/package.model';

describe('HabitatService', () => {
  let service: HabitatService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HabitatService]
    });
    service = TestBed.inject(HabitatService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch packages', () => {
    service.getPackages().subscribe(response => {
      expect(response.data.length).toBeGreaterThan(0);
      expect(response.data[0].name).toBeDefined();
    });

    const req = httpMock.expectOne('/api/depot/origins/core/packages?limit=50');
    expect(req.request.method).toBe('GET');
    req.error(new ProgressEvent('Network error'));
  });

  it('should return mock data on error', () => {
    service.getPackages().subscribe(response => {
      expect(response.data.length).toBeGreaterThan(0);
      expect(response.data[0].name).toBeDefined();
    });

    const req = httpMock.expectOne('/api/depot/origins/core/packages?limit=50');
    req.error(new ProgressEvent('Network error'));
  });
});