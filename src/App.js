//App.js
// container holding both input window and output window
//



import React from 'react';
import './App.css';
import InputWindow from './InputWindow';
import OutputWindow from './OutputWindow';



class App extends React.Component {
  constructor(props){
    super(props);

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      inputText: '',
      markdown: ''
    }

   
  }

  onInputChange(e) {
    this.setState({inputText: e});
    console.log("Changed state to: " + this.state.inputText);
  }


  render() {
    return(
      <div className="App">
        <div class="left-container">
        <h4>Input</h4>
          <InputWindow value={this.state.inputText} onInputChange={this.onInputChange} />
          </div>
        <div class="right-container">
          <h4>Markdown</h4>
          <OutputWindow raw_markdown={this.state.inputText}/>
        </div>
      </div>
    )
  }
}


export default App;
