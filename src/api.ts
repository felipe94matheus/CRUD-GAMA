import axios from "axios";
import { Users } from "./components/types";

const api = axios.create({
    baseURL: "http://localhost:3333",
});

export const getUsers = async (): Promise<Users[]> => {
    const response = await api.get("/users");
    return response.data;
}

// export const createUser = async (user: Omit<Users,"id">): Promise<Users> => {
//     const response = await api.post<Users>("/users", user)
//     return response.data;
// }

export const createUser = (user: Omit<Users, "id">): Promise<Users> => {
    return api.post<Users>('/users', user).then(response => response.data)
}