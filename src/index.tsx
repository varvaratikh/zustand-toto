import React from 'react';
import * as ReactDOM from 'react-dom';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';

ReactDOM.render(
    <>
        <AddTodo />
        <TodoList />
    </>,
    document.getElementById('root')
);