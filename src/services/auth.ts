import { useMutation } from "@tanstack/react-query";
import apiClient from "./apiClient";

interface LoginResponse {
  token?: string;
  error?: string;
}

interface LoginVariables {
  email: string;
  password: string;
}

const login = async (variables: LoginVariables): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>("/login", variables);
  return response.data;
};

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginVariables>({
    mutationFn: login,
  });
};
