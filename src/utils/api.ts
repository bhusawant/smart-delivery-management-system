const apiBaseUrl = '/api';

export const fetchData = async (url: string) => {
  try {
    const response = await fetch(`${apiBaseUrl}${url}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

export const postData = async (url: string, body: any) => {
  try {
    const response = await fetch(`${apiBaseUrl}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};
