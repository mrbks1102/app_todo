import React, { Component } from 'react';
import './App.css';
import ToDoList from "./components/ToDoList.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <form
          className="App_form">
          <div>
            <input
              type="text"
              id="title"
              placeholder="title"
            />
          </div>
          <div>
            <button type="submit">
              投稿
            </button>
          </div>
        </form>
        <div>
          <ToDoList title="ToDoリスト" />
        </div>
      </div>
    );
  }
}

export default App;
