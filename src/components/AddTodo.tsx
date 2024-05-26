import React, { useState } from 'react';
import { useTodoStore } from '../stores/todoStore';

export const AddTodo: React.FC = () => {
    const [text, setText] = useState<string>('');
    const addTodo = useTodoStore((state) => state.addTodo);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};