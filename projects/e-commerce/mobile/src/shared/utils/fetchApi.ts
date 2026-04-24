const API_URL = "http://localhost:4000";

export default async function fetchApi(
  endpoint: string,
  options: RequestInit = {}
) {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 15000); // 15s timeout

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });

    const contentType = response.headers.get("content-type");

    let data;

    if (contentType?.includes("application/json")) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    if (!response.ok) {
      throw {
        status: response.status,
        data,
      };
    }

    return data;
  } finally {
    clearTimeout(timeout);
  }
}