import React from 'react';
import './App.css';

import Form from './component/taskForm'

class App extends React.Component{
  render(){
    return (
      <div className="App">
          <Form />
      </div>
    );
  }
}

export default App;
