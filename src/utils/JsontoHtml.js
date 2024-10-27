// This is the file used to change the json data into Html all the steps mentioned

export const JsontoHtml = (data) => {
    // If the data is not an object or array, return it as a string
    if (typeof data !== 'object' || data === null) {
      return `<span>${data}</span>`;
    }
  
    // If the data is an array, process each item and wrap in an <ul>
    if (Array.isArray(data)) {
      return `<ul>${data.map(item => `<li>${JsontoHtml(item)}</li>`).join('')}</ul>`;
    }
  
    // If the data is an object, process each key-value pair and wrap in an <ul>
    return `<ul>${Object.entries(data)
      .map(([key, value]) => `<li><strong>${key}:</strong> ${JsontoHtml(value)}</li>`)
      .join('')}</ul>`;
  };