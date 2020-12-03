import React, { Component } from 'react';
import './App.css';
import ToDoList from "./components/ToDoList.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <ToDoList
            title="ToDoリスト"
          />
        </div>
      </div>
    );
  }
}

export default App;
