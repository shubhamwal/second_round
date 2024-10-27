import React, { useState } from 'react';
import './App.css';
import RenderControl from './components/RenderControl';
import JsonInput from './components/JsonInput';
import JsonDisplay from './components/JsonDisplay';
import ApiStatusMessage from './components/ApiStatusMessage';
import {FetchData} from './services/FetchData';
import {JsontoHtml} from './utils/JsontoHtml';
import {JsontoMarkdown} from './utils/JsontoMarkdown';


function App() {
  const [url, setUrl] = useState('');
  const [jsonData, setJsonData] = useState(null);
  const [format, setFormat] = useState('JSON');
  const [statusMessage, setStatusMessage] = useState('');

  const handleFetchData = async () => {
    const result = await FetchData(url);
    if (result.error) {
      setStatusMessage(result.error);
    } else {
      setJsonData(result);
      setStatusMessage('Data fetched successfully');
    }
  };

  const renderData = () => {
    if (!jsonData) return '';
    if (format === 'HTML') return JsontoHtml(jsonData);
    if (format === 'Markdown') return JsontoMarkdown(jsonData);
    return JSON.stringify(jsonData, null, 2);
  };

  return (
    <div className="app">
      <JsonInput url={url} setUrl={setUrl} onFetchData={handleFetchData} jsonData={jsonData} setJsonData={setJsonData} />
      <RenderControl setFormat={setFormat} />
      <JsonDisplay data={renderData()} />
      <ApiStatusMessage message={statusMessage} />
    </div>
  );
}

export default App;
