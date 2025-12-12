import { API_URL } from '@/shared/config/api';

export const ProductsAPI = {
  getAll: () => `${API_URL}/products`,
  delete: (id: number) => `${API_URL}/products/${id}`,
};
