export interface HabitatPackage {
  name: string;
  origin: string;
  version: string;
  release: string;
  platforms: string[];
  maintainer: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface PackagesResponse {
  data: HabitatPackage[];
  total_count: number;
}