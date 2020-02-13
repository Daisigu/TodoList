import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header/app-header';
import TodoList from './components/todo-list/todo-list';
import SearchPanel from './components/search-panel/search-panel';
import ItemStatusFilter from './components/item-status-filter/item-status-filter';


const App = () => {

const todoData = [
    {label :'Drink Coffee', important: false, id: 1 },
    {label :'Make Awesome App', important: true, id: 2 },
    {label :'Have a lunch', important: false, id: 3 },

]

return (
<div>
    <AppHeader/>
    <SearchPanel/> 
    <ItemStatusFilter/>
    <TodoList todos={todoData}/> 
</div>
);
};
ReactDOM.render(<App/>, document.getElementById('root'));