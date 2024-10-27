
// Here i create a input field for enter the Api endpoints
// One get button
// Text area to edit the json data
import React, { useState } from 'react'

export default function JsonInput({ url, setUrl, onFetchData, jsonData, setJsonData }) {
    const [inputJson, setInputJson] = useState(JSON.stringify(jsonData, null, 2));

    const handleJsonChange = (e) => {
      setInputJson(e.target.value);
      try {
        setJsonData(JSON.parse(e.target.value));
      } catch (error) {
        setJsonData(null);
      }
    };
  return (
    <div className="json-input">
    <input 
      type="text" 
      value={url} 
      onChange={(e) => setUrl(e.target.value)} 
      placeholder="Enter API Endpoint URL" 
    />
    <button onClick={onFetchData}>GET</button>
    <textarea 
      value={inputJson}
      onChange={handleJsonChange}
      placeholder="Edit JSON data here..."
    />
  </div>

  )
}
