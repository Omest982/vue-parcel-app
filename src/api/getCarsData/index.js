const API_URL = import.meta.env.VITE_API_BASE_URL;

const handleResponse = async (response) => {
    if (!response || !response.ok) {
      const errorText = response ? await response.text() : 'No response';
      throw new Error(`HTTP error! status: ${response ? response.status : 'No status'}, message: ${errorText}`);
    }
    return response.json();
};

export const getCarsData = async () => {
  try {
      const response = await fetch(`${API_URL}/cars`);
      return handleResponse(response);
  } catch (e) {
      console.error(`Error fetching data: ${e}`);
      throw new Error('Network error');
  }
};