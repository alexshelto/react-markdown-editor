//:Input window
//
//
//{/* value={this.state.inputtedMarkdown} onChange={this.onInputChange} /> */} 
//
//

import React from 'react';
import './InputWindow.css';




function InputWindow(props) {


  return (
    <div className="InputWindow">
      <p>
        <textarea className="input-text" placeholder="# Enter markdown here!" onChange={(e) => {
          props.onInputChange(e.target.value)
        }} />
      </p>
    </div>
  );
}


export default InputWindow;
