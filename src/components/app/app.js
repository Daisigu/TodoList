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
        this.createTodoItem('Выпить кофэ'),
        this.createTodoItem('Почесать попу'),
        this.createTodoItem('Почесать яйки')
    ]
};
    
    createTodoItem (label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }  
 
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
const newItem = this.createTodoItem(text);

this.setState( ( { todoData } ) => {
    const newArr =[
        ...todoData,
        newItem
    ];

    return {
        todoData: newArr
    };

});
 };
onToggleImportant = (id) => {
    console.log('ToggleImportant', id);
};

onToggleDone = (id) =>  {
    this.setState(({todoData}) => {

    });
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
                      onDeleted={this.deleteItem}
                      onToggleImportant={this.onToggleImportant}
                      onToggleDone={this.onToggleDone} /> 
                      
            <ItemAddForm onItemAdded={this.addItem}/>
        </div>
        );
        };
};
