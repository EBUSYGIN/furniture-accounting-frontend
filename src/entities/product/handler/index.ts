import axios from 'axios';
import { ProductsAPI } from '../api';
import type { Product } from '../types';

const getAllProducts = async (): Promise<Product[]> => {
  try {
    const serverResponse = await axios.get(ProductsAPI.getAll());
    const products: Product[] = serverResponse.data.products;
    return products;
  } catch (e) {
    console.log('Ошибка загрузки продуктов');
    if (e instanceof Error) {
      throw e;
    }

    throw new Error('Ошибка загрузки продуктов');
  }
};

const deleteProduct = async (id: number) => {
  try {
    await axios.delete(ProductsAPI.delete(id));
  } catch (e) {
    console.log('Ошибка удаления');
    if (e instanceof Error) {
      throw e;
    }

    throw new Error('Ошибка удаления');
  }
};

export const ProductsHandler = {
  getAllProducts,
  deleteProduct,
};
