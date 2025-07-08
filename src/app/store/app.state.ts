import { HabitatPackage } from '../models/package.model';

export interface AppState {
  app: {
    message: string;
  };
  packages: {
    items: HabitatPackage[];
    loading: boolean;
    error: string | null;
  };
}