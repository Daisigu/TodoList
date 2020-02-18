import React, { Component } from 'react';
import AppHeader from '../app-header';
import TodoList from '../todo-list/todo-list';
import SearchPanel from '../search-panel/search-panel';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';
import './app.css';


export default class App extends Component {

    maxId= 100;

state ={
    todoData: [
        {label :'Drink Coffee', important: false, id: 1 },
        {label :'Make Awesome App', important: true, id: 2 },
        {label :'Have a lunch', important: false, id: 3 },
    ]
};
    
deleteItem = (id) => {

    this.setState(( { todoData }) => {

        const idx = todoData.findIndex((el) => el.id ===id)

        const newArray = [
            ...todoData.slice(0, idx),
            ...todoData.slice(idx + 1)];

        return {
            todoData: newArray
        };
    });
};
 
 addItem = (text) => {
 
    onToggleImportant = (id)= {
        
    };

    onToggleDone = (id) =  {
        
    }
};
render(){
    return (
        <div className="todo-app">
            <AppHeader/>
            <div className="top-panel d-flex">
            <SearchPanel/> 
            <ItemStatusFilter/>
            </div>
            <TodoList todos={this.state.todoData}
                      onDeleted={this.deleteItem} /> 
                      <ItemAddForm onItemAdded={this.addItem}/>
        </div>
        );
        };
};
