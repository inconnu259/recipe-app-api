import { CSRF_TOKEN } from "./csrf_token";

function handleResponse(response: { status: number; json: () => any; }) {
  if (response.status === 204) {
    return "";
  } else if (response.status == 404) {
    return null;
  } else {
    return response.json();
  }
}

function apiService(endpoint: RequestInfo, method: string, data: undefined) {
  const config = {
    method: method || "GET",
    body: data !== undefined ? JSON.stringify(data) : null,
    headers: {
      "content-type": "application/json",
      "X-CSRFTOKEN": CSRF_TOKEN
    }
  };
  return fetch(endpoint, config)
    .then(handleResponse)
    .catch((error: any) => console.log(error));
}

export { apiService };