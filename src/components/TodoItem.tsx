import React from 'react';
import { useTodoStore } from '../stores/todoStore';

interface TodoItemProps {
    id: number;
    text: string;
    completed: boolean;
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
    const toggleTodo = useTodoStore((state) => state.toggleTodo);

    return (
        <li
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
            onClick={() => toggleTodo(id)}
        >
            {text}
        </li>
    );
};