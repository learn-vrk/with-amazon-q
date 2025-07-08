import { ModuleFederationConfig } from '@module-federation/enhanced/webpack';

const config: ModuleFederationConfig = {
  name: 'shell',
  exposes: {
    './Component': './src/app/app.component.ts',
  },
  shared: {
    '@angular/core': { singleton: true, strictVersion: true },
    '@angular/common': { singleton: true, strictVersion: true },
    '@angular/router': { singleton: true, strictVersion: true },
    '@ngrx/store': { singleton: true, strictVersion: true },
  },
};

export default config;