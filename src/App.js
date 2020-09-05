//App.js
// container holding both input window and output window
//



import React from 'react';
import './App.css';
import InputWindow from './InputWindow';
import OutputWindow from './OutputWindow';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.downloadFile = this.downloadFile.bind(this);
    this.state = {
      inputText: '',
      markdown: '',
      fileName: ''
    }


  }

  onInputChange(e) {
    this.setState({ inputText: e });
    console.log("Changed state to: " + this.state.inputText);
  }

  onFileNameChange(e){
    this.setState({fileName: e.target.value});
  }

  downloadFile(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }


  render() {
    return (
      <div className="App">
        <div class="left-container">
          <h4>Input</h4>
          <InputWindow value={this.state.inputText} onInputChange={this.onInputChange} />
        </div>
        <div class="right-container">

          <div className="download-box">
          <form onsubmit={this.downloadFile(this.state.fileName, this.state.inputText)}>
            <input type="text" name="name" value="file.md" onChange={(e) => { e.preventDefault(); this.onFileNameChange(e.target.value) }} />
            <input type="submit" value="Download" />
          </form>

          </div>
          <h4>Markdown</h4>
          <OutputWindow raw_markdown={this.state.inputText} />
        </div>
      </div>
    )
  }
}


export default App;
