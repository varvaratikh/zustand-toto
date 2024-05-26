import React from 'react';
import { useTodoStore } from '../stores/todoStore';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC = () => {
    const todos = useTodoStore((state) => state.todos);

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>
    );
};