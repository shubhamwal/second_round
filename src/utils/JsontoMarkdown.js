// src/utils/jsonToMarkdown.js

export const JsontoMarkdown = (data, level = 1) => {
    // If the data is a simple type, return it as-is
    if (typeof data !== "object" || data === null) {
      return data;
    }
  
    // If the data is an array, format each item and separate with line breaks
    if (Array.isArray(data)) {
      return data.map(item => `- ${JsontoMarkdown(item, level + 1)}`).join('\n');
    }
  
    // If the data is an object, format each key-value pair recursively
    return Object.entries(data)
      .map(([key, value]) => {
        // Bold key names and call jsonToMarkdown on the value
        if (typeof value === "object") {
          return `**${key}**:\n${JsontoMarkdown(value, level + 1)}`;
        } else {
          return `**${key}**: ${value}`;
        }
      })
      .join('\n');
  };
  