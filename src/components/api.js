const BASE_URL = `'https://contact.mediusware.com/api/contacts/?format=json&page=1'`;

export const fetchData = async (path) => {
  try {
    const response = await fetch(`${BASE_URL}/${path}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};