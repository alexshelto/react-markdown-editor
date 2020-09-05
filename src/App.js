//App.js
// container holding both input window and output window
//



import React from 'react';
import './styles.css';
import InputWindow from './InputWindow';
import OutputWindow from './OutputWindow';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.downloadFile = this.downloadFile.bind(this);
    // this.downloadFile = this.downloadFile.bind(this)
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
    console.log(typeof(fileName));
  }

  handleSubmit(e){
    e.preventDefault();
    this.downloadFile(this.state.fileName, this.state.inputText);
    console.log(this.state.inputText);
  }

  downloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([this.state.inputText],    
                {type: 'text/plain;charset=utf-8'});
    element.href = URL.createObjectURL(file);
    element.download = this.state.fileName;
    document.body.appendChild(element);
    element.click();
  }


  render() {
    return (
      <div className="App">

       

        <div className="left-container">
            <h4>Input</h4>
          <InputWindow value={this.state.inputText} onInputChange={this.onInputChange} />
        </div>

        <div className="right-container">

          <div className="download-box">
            <form onSubmit={this.downloadFile}>
            <label for="filename">Filename </label>
              <input type="text" id="filename" name="name" placeholder="README.md" onChange={(e) => {this.onFileNameChange(e);}} />
              <input type="submit" value="Download"/>
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
