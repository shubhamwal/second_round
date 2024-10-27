// In this we are showing the data fetched from the api
import React from 'react'

export default function JsonDisplay({ data }) {
  return (
    <div className="json-display">
    <div dangerouslySetInnerHTML={{ __html: data }} />
  </div>

  )
}
