import React, { Component } from 'react';
import '../css/ToDoList.css';

//状態を持たない、propsに渡された引数によって表示内容が変わるだけのコンポーネント
class ToDoList extends Component {
  render() {
    //todoリストのタイトルの変数を定義
    const {
      title
    } = this.props;

    return (
      <div className="ToDoList">
        <div className="ToDoList_title">{title}</div>
      </div>
    )
  }
}

export default ToDoList;
