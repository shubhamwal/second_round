// Dropdown menu for the JSON, HTML, Markdown
import React from 'react'

export default function RenderControl({ setFormat }) {
  return (
    <div className="render-controls">
    <label>Select Render Format: </label>
    <select onChange={(e) => setFormat(e.target.value)}>
      <option value="JSON">JSON</option>
      <option value="HTML">HTML</option>
      <option value="Markdown">Markdown</option>
    </select>
  </div>

  )
}
