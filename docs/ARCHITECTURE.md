# Architecture Documentation

## Overview
Angular 19 microfrontend application for displaying Habitat packages with NgRx state management and Kendo UI components.

## Technology Stack
- **Angular 19** - Framework with standalone components
- **NgRx 19** - State management
- **Kendo UI Angular** - Enterprise UI components
- **TypeScript 5.6** - Type safety
- **RxJS** - Reactive programming

## Application Structure

### Components
- `AppComponent` - Root component
- `PackagesListComponent` - Displays packages in Kendo grid

### Services
- `HabitatService` - API communication with fallback to mock data

### State Management (NgRx)
- `AppState` - Root state interface
- `PackagesState` - Packages feature state
- `PackagesEffects` - Side effects handling
- `PackagesReducer` - State mutations

### Models
- `HabitatPackage` - Package data interface

## Data Flow
1. Component dispatches `loadPackages` action
2. Effect intercepts action and calls service
3. Service fetches data from API (or returns mock data)
4. Effect dispatches success/failure action
5. Reducer updates state
6. Component receives updated state via selectors