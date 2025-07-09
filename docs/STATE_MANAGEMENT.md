# State Management Design

## NgRx Architecture

### Actions
- `loadPackages` - Triggers package loading
- `loadPackagesSuccess` - Handles successful data fetch
- `loadPackagesFailure` - Handles API errors

### State Structure
```typescript
interface PackagesState {
  items: HabitatPackage[];
  loading: boolean;
  error: string | null;
}
```

### Effects
- `loadPackages$` - Handles API calls and error management
- Automatically falls back to mock data on API failure

### Selectors
- `state.packages.items` - Package array
- `state.packages.loading` - Loading state
- `state.packages.error` - Error messages

### Data Flow
1. Component dispatches `loadPackages`
2. Effect calls `HabitatService.getPackages()`
3. Service returns data or mock fallback
4. Effect dispatches success/failure action
5. Reducer updates state
6. Component receives updates via observables