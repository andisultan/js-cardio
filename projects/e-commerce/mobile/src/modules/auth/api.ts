import fetchApi from "@/shared/utils/fetchApi";

export function authLogin(
  { email, password }: 
  { email: string; password: string }
) {
  return fetchApi("/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export function authRegister(
  { name, email, password }: 
  { name: string; email: string; password: string }
) {
  return fetchApi("/api/v1/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
}