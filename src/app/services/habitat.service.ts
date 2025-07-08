import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HabitatPackage } from '../models/package.model';

@Injectable({
  providedIn: 'root'
})
export class HabitatService {
  private readonly API_BASE = '/api';

  constructor(private http: HttpClient) {}

  getPackages(origin: string = 'core', limit: number = 50): Observable<{ data: HabitatPackage[] }> {
    return this.http.get<{ data: HabitatPackage[] }>(`${this.API_BASE}/depot/origins/${origin}/packages?limit=${limit}`)
      .pipe(
        catchError(() => this.getMockPackages())
      );
  }

  private getMockPackages(): Observable<{ data: HabitatPackage[] }> {
    const mockPackages: HabitatPackage[] = [
      {
        name: 'nginx',
        origin: 'core',
        version: '1.21.6',
        release: '20220308141834',
        platforms: ['x86_64-linux'],
        maintainer: 'The Habitat Maintainers',
        description: 'HTTP and reverse proxy server',
        created_at: '2022-03-08T14:18:34Z',
        updated_at: '2022-03-08T14:18:34Z'
      },
      {
        name: 'redis',
        origin: 'core',
        version: '6.2.6',
        release: '20220201120000',
        platforms: ['x86_64-linux'],
        maintainer: 'The Habitat Maintainers',
        description: 'In-memory data structure store',
        created_at: '2022-02-01T12:00:00Z',
        updated_at: '2022-02-01T12:00:00Z'
      },
      {
        name: 'postgresql',
        origin: 'core',
        version: '13.6',
        release: '20220215100000',
        platforms: ['x86_64-linux'],
        maintainer: 'The Habitat Maintainers',
        description: 'Object-relational database system',
        created_at: '2022-02-15T10:00:00Z',
        updated_at: '2022-02-15T10:00:00Z'
      }
    ];
    return of({ data: mockPackages });
  }
}