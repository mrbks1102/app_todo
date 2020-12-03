import React, { Component } from 'react';
import './App.css';
import ToDoList from "./components/ToDoList.js"

class App extends Component {
  state = {
    todoList: []
  }

  render() {
    return (
      <div className="App">
        <form
          className="App_form"
          onSubmit={e => {
            // フォームが送信されてしまうので無効化し更新されないようにする
            e.preventDefault();

            // idがtitleのvalueを取得
            const title = e.target.title.value;

            // todoList stateに追加
            this.setState(
              {
                todoList: this.state.todoList.concat({
                  title: title
                })
              },
              // stateの変更後に入力した値を空にする(フォームの表示)
              () => {
                //constで定義した物は再代入できない為再度記述
                e.target.title.value = "";
              }
            )
          }}
        >
          <div>
            <input
              type="text"
              id="title"
              placeholder="title"
            />
          </div>
          <div>
            <button type="submit">
              登録
            </button>
          </div>
        </form>
        <div>
          {/* todoList配列の要素数分ToDoListコンポーネントを表示 */}
          {this.state.todoList.map(todo => (
            <ToDoList
              key={todo.title}
              title={todo.title}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
