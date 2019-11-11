import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="container">
      <div className="row">
        {/* <div className="col-4 bg-warning">
        hello
        </div>
        <div className="col-4 bg-danger">
          shariq
        </div>
        <div className="col-4 bg-primary">
          Naeem
        </div> */}
        <TodoInput/>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
