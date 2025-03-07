const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const fetchAPI = async (url: string, options: RequestInit = {}) => {
  const fullUrl = `${API_URL}${url}`;
  console.log("Fetching:", fullUrl);

  const response = await fetch(fullUrl, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  console.log("Response status:", response.status);
  const text = await response.text();  
  console.log("Response body:", text); 

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  if (response.headers.get('content-type')?.includes('application/json')) {
    return JSON.parse(text);
  }

  return null; 
};