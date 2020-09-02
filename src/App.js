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
        <InputWindow value={this.state.inputText} onInputChange={this.onInputChange} />
        <OutputWindow raw_markdown={this.state.inputText}/>
      </div>
    )
  }
}


export default App;
