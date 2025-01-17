import axios, { AxiosResponse } from "axios";
import { SubCategory } from "../types/SubCategory";
import { API_BASE_URL } from "../../config";

// API to Fetch all subcategories
export const fetchSubCategories = async (): Promise<
  AxiosResponse<SubCategory[]>
> => {
  return axios.get<SubCategory[]>(
    `${API_BASE_URL}/selling-product/subcategory/get`
  );
};

// API to Create a subcategory
export const createSubCategory = async (
  data: Partial<SubCategory>
): Promise<AxiosResponse<SubCategory>> => {
  return axios.post<SubCategory>(
    `${API_BASE_URL}/selling-product/subcategory/create`,
    data
  );
};

// API to Delete a subcategory by ID
export const deleteSubCategory = async (
  id: number
): Promise<AxiosResponse<void>> => {
  return axios.delete<void>(
    `${API_BASE_URL}/selling-product/subcategory/delete/${id}`
  );
};

// API to Update a subcategory by ID
export const updateSubCategory = async (
  id: number,
  data: Partial<SubCategory>
): Promise<AxiosResponse<SubCategory>> => {
  return axios.put<SubCategory>(
    `${API_BASE_URL}/selling-product/subcategory/update/${id}`,
    data
  );
};

// API to Get subcategory by ID
export const fetchSubCategoryById = async (
  id: number
): Promise<AxiosResponse<SubCategory>> => {
  return axios.get<SubCategory>(
    `${API_BASE_URL}/selling-product/subcategory/edit/${id}`
  );
};
