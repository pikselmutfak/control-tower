import { useMemo } from 'react';
import useSWR, { mutate } from 'swr';

import axiosInstance, { fetcher, endpoints } from 'src/utils/axios';


// ----------------------------------------------------------------------

export function useGetCategories() {
  const URL = endpoints.categories.list;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      categories: data || [],
      categoriesLoading: isLoading,
      categoriesError: error,
      categoriesValidating: isValidating,
      categoriesEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export function useCreateCategory() {
  const URL = endpoints.categories.new;

  const createCategory = async (categoryData) => {
    try {
      const response = await axiosInstance.post(URL, categoryData);
      mutate(URL); 
      return response.data;
    } catch (error) {
      throw error.response.data || 'Something went wrong';
    }
  };

  return createCategory;
}

export function useEditCategory() {

  const createCategory = async (categoryData) => {
    const URL =  `${endpoints.categories.delete}/${categoryData?.id}`
    try {
      const response = await axiosInstance.put(URL, categoryData);
      mutate(URL); 
      return response.data;
    } catch (error) {
      throw error.response.data || 'Something went wrong';
    }
  };

  return createCategory;
}

export function useDeleteCategory() {
  const deleteCategory = async (id) => {
    const URL = `${endpoints.categories.delete}/${id}`;
    try {
      const response = await axiosInstance.delete(URL, id);
      mutate(URL); // SWR'ın veriyi yenilemesini sağlar
      return response; // response'ı döndür
    } catch (error) {
      throw error.response.data || 'Something went wrong';
    }
  };

  return deleteCategory;
}

// ----------------------------------------------------------------------

export function useGetCategory(id) {
  console.log("id",id)
  const URL = id ? `${endpoints.categories.edit}/${id}` : '';

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      category: data,
      categoryLoading: isLoading,
      categoryError: error,
      categoryValidating: isValidating,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

