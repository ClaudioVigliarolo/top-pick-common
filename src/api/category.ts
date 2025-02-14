import { CategoryCreated, Category, CategoryFeatured } from "../interfaces/category";
import { ApiGetCategoriesQueryParams, ApiGetCategoryDetailsQueryParams } from "./api";
import axios from "axios";
import { LibraryParams } from "../config/config";

export async function getCategories(params: ApiGetCategoriesQueryParams): Promise<CategoryFeatured[]> {
  const response = await axios.get(`${LibraryParams.hostname}/api/content/categories`, {
    params: { ...params },
  });
  return response.data;
}

export const getCategoryDetails = async (params: ApiGetCategoryDetailsQueryParams): Promise<Category> => {
  const response = await axios.get(`${LibraryParams.hostname}/api/content/categories/details`, {
    params: { ...params },
  });
  return response.data;
};

export const deleteCategory = async (token: string, id: number): Promise<void> => {
  await axios.delete(`${LibraryParams.hostname}/api/content/categories/${id}`, {
    data: { id },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createCategory = async (token: string, category: CategoryCreated): Promise<Category> => {
  const res = await axios.post(`${LibraryParams.hostname}/api/content/categories`, 
    { category },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

export const updateCategory = async (token: string, id: number, category: CategoryCreated): Promise<Category> => {
  const response = await axios.patch(`${LibraryParams.hostname}/api/content/categories/${id}`, 
    { category },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};