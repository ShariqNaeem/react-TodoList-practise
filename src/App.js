import React,{Component} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
//import TodoItem from './components/TodoItem';

export default class App extends Component {
  state={
    // items:[{id:1, title:"wake up"},{id:2, title:"make breakfast"}],
    items:[],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange= (e) =>{
    //console.log("Handle Change.");
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit=e=>{
    //console.log("Handle Submit.");
    e.preventDefault();
    const newItem={
      id: this.state.id,
      title: this.state.item
    };
    
    const updatedItem=[...this.state.items, newItem];

    this.setState({
      items: updatedItem,
      id: uuid(),
      item: "",
      editItem: false
    },()=> console.log(this.state)
    );
  };
  
  clearList=()=>{
    console.log("Clear List.");
  };

  
  handleDelete=(id)=>{
    console.log("Handle Delete.");
  };
  
  handleEdit=(id)=>{
    console.log("Handle Edit.");
  };

 render(){
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">
          <h3>TODO input</h3>
          <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
          />
          <TodoList
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        </div>
      </div>
    </div>
  );
 }
}

