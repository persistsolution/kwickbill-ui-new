import axios, { AxiosResponse } from "axios";
import { Category } from "../types/Category";
import { API_BASE_URL } from "../../config";

// Fetch all categories
export const fetchCategories = async (): Promise<AxiosResponse<Category[]>> => {
  return axios.get<Category[]>(`${API_BASE_URL}/selling-product/category/get`);
};

// API to fetch a category by ID
export const fetchByIdCategory = async (
  id: number
): Promise<AxiosResponse<Category>> => {
  return axios.get<Category>(
    `${API_BASE_URL}/selling-product/category/edit/${id}`
  );
};

// API to update a category
export const updateCategory = async (
  id: number,
  data: Partial<Category>
): Promise<AxiosResponse<Category>> => {
  return axios.put<Category>(
    `${API_BASE_URL}/selling-product/category/update/${id}`,
    data
  );
};

// API to delete a category
export const deleteCategory = async (
  id: number
): Promise<AxiosResponse<void>> => {
  return axios.delete<void>(
    `${API_BASE_URL}/selling-product/category/delete/${id}`
  );
};

// API to create a category
export const createCategory = async (
  data: any
): Promise<AxiosResponse<void>> => {
  return axios.post<void>(
    `${API_BASE_URL}/selling-product/category/create`,
    data
  );
};
