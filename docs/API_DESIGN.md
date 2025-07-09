# API Design Documentation

## HabitatService

### Endpoints
- **GET** `/api/depot/origins/{origin}/packages?limit={limit}`
- Proxied to `https://bldr.habitat.sh/v1` via proxy.conf.json

### Parameters
- `origin` - Package origin (default: 'core')
- `limit` - Max packages to fetch (default: 50)

### Response Format
```typescript
{
  data: HabitatPackage[]
}
```

### Package Model
```typescript
interface HabitatPackage {
  name: string;
  origin: string;
  version: string;
  release: string;
  platforms: string[];
  maintainer: string;
  description: string;
  created_at: string;
  updated_at: string;
}
```

### Error Handling
- API failures automatically fall back to mock data
- Mock data provides 3 sample packages for development
- Errors are caught and dispatched to NgRx store

### Proxy Configuration
```json
{
  "/api/*": {
    "target": "https://bldr.habitat.sh/v1",
    "secure": true,
    "changeOrigin": true,
    "pathRewrite": { "^/api": "" }
  }
}
```