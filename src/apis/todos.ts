import axiosInstance from '@/config/axios';
import {
  DeleteTodosResponse,
  GetTodosResponse,
  IAddTodoParams,
  ITodo,
  IUpdateTodoParams,
} from '@/interfaces/todo';
import { endpoints } from '@/apis/endpoint';

//--------------------------------------------------------------------------------------------
export const getTodos = async (): Promise<GetTodosResponse> => {
  const response = await axiosInstance.get(endpoints.todos.get);

  return response.data;
};

export const createTodo = async (params: IAddTodoParams): Promise<ITodo> => {
  const response = await axiosInstance.post(endpoints.todos.create, params);
  return response.data;
};

export const updateTodo = async (
  id: number,
  params: IUpdateTodoParams
): Promise<ITodo> => {
  const response = await axiosInstance.put(
    endpoints.todos.update + `/${id}`,
    params
  );
  return response.data;
};

export const deleteTodo = async (id: number): Promise<DeleteTodosResponse> => {
  const response = await axiosInstance.delete(
    endpoints.todos.delete + `/${id}`
  );
  return response.data;
};
