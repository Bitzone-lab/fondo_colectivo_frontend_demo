/* eslint-disable @typescript-eslint/no-explicit-any */
import Strapi from "@/types/strapi";
import { API_KEY, API_URL } from "./base";

export type HttpStrapiResponse<T> = Promise<Strapi.StrapiResponse<T>>;

const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_KEY}`,
});

function buildUrl(path: string, params?: Record<string, any>): string {
  const url = new URL(`${API_URL}${path}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value));
      }
    });
  }
  return url.toString();
}

async function handleResponse<T>(response: Response): HttpStrapiResponse<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw { status: response.status, ...error };
  }
  return response.json();
}

export async function strapiGet<T>(path: string): HttpStrapiResponse<T> {
  const url = buildUrl(path);
  const response = await fetch(url, {
    method: "GET",
    headers,
  });
  return handleResponse<T>(response);
}

export async function strapiPost<T, Body>(
  path: string,
  body: Body
): HttpStrapiResponse<T> {
  const url = buildUrl(path);
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  return handleResponse<T>(response);
}

export async function strapiPut<T, Body>(
  path: string,
  body: Body
): HttpStrapiResponse<T> {
  const url = buildUrl(path);
  const response = await fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  });
  return handleResponse<T>(response);
}

export async function strapiPatch<T, Body>(
  path: string,
  body: Partial<Body>
): HttpStrapiResponse<T> {
  const url = buildUrl(path);
  const response = await fetch(url, {
    method: "PATCH",
    headers,
    body: JSON.stringify(body),
  });
  return handleResponse<T>(response);
}

export async function strapiDelete<T>(path: string): HttpStrapiResponse<T> {
  const url = buildUrl(path);
  const response = await fetch(url, {
    method: "DELETE",
    headers,
  });
  return handleResponse<T>(response);
}
