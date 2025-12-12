import type { Workshop } from '@/entities/workshop/types';

export interface Product {
  id: number;
  name: string;
  article: string;
  typeId: number;
  materialId: number;
  minPrice: number;
  createdAt: string;
  updatedAt: string;
  material: Material;
  type: Type;
  workshops: Workshop[];
}

export interface Material {
  id: number;
  name: string;
  lossPercent: number;
  createdAt: string;
  updatedAt: string;
}

export interface Type {
  id: number;
  name: string;
  coefficient: number;
  createdAt: string;
  updatedAt: string;
}
