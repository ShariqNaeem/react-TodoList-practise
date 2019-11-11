import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from './components/TodoItem';

function App() {
  state={
    items:[{id:1, title:"wake up"},{id:2, title:"make breakfast"}],
    id: uuid(),
    item: '',
    editItem: ''
  }

  handleChange=e=>{
    console.log("Handle Change.");
  }

  handleSubmit=e=>{
    console.log("Handle Submit.");
  }
  
  clearList=()=>{
    console.log("Clear List.");
  }

  
  handleDelete=(id)=>{
    console.log("Handle Delete.");
  }
  
  handleEdit=(id)=>{
    console.log("Handle Edit.");
  }


  return (
    <div className="container">
      <div className="row">
        <div className=""> </div>
      </div>
    </div>
  );
}

export default App;
