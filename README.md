# Angular Microfrontend App

A modern Angular 18 application with NgRx state management.

## Features

- Angular 18 with standalone components
- NgRx for state management
- TypeScript 5.5
- Module federation ready

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Application runs on `http://localhost:4200`

### Build

```bash
npm run build        # Development build
npm run build:prod   # Production build
```

## Project Structure

```
src/
├── app/
│   ├── store/       # NgRx store configuration
│   └── app.component.ts
├── index.html
├── main.ts
└── styles.css
```

## Scripts

- `npm start` - Start development server
- `npm run build` - Build for development
- `npm run build:prod` - Build for production
- `npm test` - Run tests
- `npm run lint` - Run linter