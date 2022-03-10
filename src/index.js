import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from '../src/TodoForm';
import TodoList from '../src/TodoList';
import useTodoState from './useTodoState';
import './styles.css';
import { Typography } from '@material-ui/core';

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Список дел
      </Typography>

      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
