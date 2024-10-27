
// This is the file where we fetch the Api Data
export const FetchData = async (url) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Check if the response status is OK (status code 200–299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse and return the JSON data from the response
      const data = await response.json();
      return { data };  // return data in an object for consistent structure
    } catch (error) {
      // Catch and return any error encountered
      return { error: error.message };
    }
  };
  