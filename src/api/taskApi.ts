import { axiosInstance } from "./axiosInstance";

export interface ApiTask {
    id: string;
    text: string;
    createdAt: string;
    updatedAt: string;
    completed?: boolean;
}

export type ApiResponse = {
    status : boolean,
    data: ApiTask[] | ApiTask
}

export const fetchTasks = async () => {
    const response = await axiosInstance.get<ApiResponse>('/todo');
    const tasks = response.data.data as ApiTask[];
    return tasks.map(task => ({
        ...task,
        completed: task.completed !== undefined ? task.completed : false
    }));
}


export const createTask = async (text: string) => {
        const response = await axiosInstance.post<ApiResponse>('/todo', {text});

    const newTask = response.data.data as ApiTask;
    return {
        ...newTask,
        completed: newTask.completed !== undefined ? newTask.completed : false
    }
}


export const deleteTaskApi = async (id: string | number) => {
    try {
        const response = await axiosInstance.delete(`todo/${id}`);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const updateTaskApi = async (id : string | number, text: string) => {
    try {
        const response = await axiosInstance.put(`todo/${id}`, {text});
        const updatedTask = response.data.data as ApiTask;
    return {
        ...updatedTask,
        completed: updatedTask.completed !== undefined ? updatedTask.completed : false
    }

    } catch (error) {
        console.error(error);
        throw error;
    }
}
