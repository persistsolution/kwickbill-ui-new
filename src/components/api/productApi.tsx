import axios, { AxiosResponse } from "axios";
import { Category } from "../types/Category";
import { API_BASE_URL } from "../../config";

// API to Fetch all products
export const fetchProducts = async (): Promise<AxiosResponse<Category[]>> => {
  return axios.get<Category[]>(
    `${API_BASE_URL}/selling-product/product/get`
  );
};

// API to fetch a Product by ID
export const fetchEditProducts = async (
  id: number
): Promise<AxiosResponse<Category>> => {
  return axios.get<Category>(
    `${API_BASE_URL}/selling-product/product/edit/${id}`
  );
};

// API to update a product
export const updateProducts = async (
  id: number,
  data: Partial<Category>
): Promise<AxiosResponse<Category>> => {
  return axios.put<Category>(
    `${API_BASE_URL}/selling-product/product/update/${id}`,
    data
  );
};

// API to delete a product
export const deleteProducts = async (
  id: number
): Promise<AxiosResponse<void>> => {
  return axios.delete<void>(
    `${API_BASE_URL}/selling-product/product/delete/${id}`
  );
};

// API to create a products
export const createProducts = async (
  data: any
): Promise<AxiosResponse<void>> => {
  return axios.post<void>(
    `${API_BASE_URL}/selling-product/product/create`,
    data
  );
};
