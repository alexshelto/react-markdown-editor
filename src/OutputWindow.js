



import React from 'react'
import './OutputWindow.css';

const ReactMarkdown = require('react-markdown');

function OutputWindow(props) {
  const raw_markdown = props.raw_markdown;

  return (
    <div className="output-window">
      <p>
        <ReactMarkdown source={raw_markdown} />
      </p>
    </div>
  )
}





export default OutputWindow;
