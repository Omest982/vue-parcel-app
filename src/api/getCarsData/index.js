const API_URL = import.meta.env.VITE_API_BASE_URL;

const handleResponse = async (response) => {
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }
    return response.json();
  };

export const getCarsData = async () => {
    const response = await fetch(`${API_URL}/cars`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
  return handleResponse(response);
}
