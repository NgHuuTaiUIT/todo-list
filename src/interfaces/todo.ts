import { ICommonApiResponse } from '@/interfaces/api-response';

export interface ITodo {
  id: number;
  userId?: number;
  time: string;
  todo: string;
  completed: boolean;
}

export interface GetTodosResponse extends ICommonApiResponse {
  todos: ITodo[];
}

export interface IAddTodoParams {
  todo: string;
  completed: boolean;
  userId: number;
}

export interface IUpdateTodoParams {
  todo: string;
  completed: boolean;
}

export interface DeleteTodosResponse extends ITodo {
  isDeleted: boolean;
  deletedOn: Date;
}
