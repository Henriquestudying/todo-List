import { useState } from 'react';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/search';
import Filter from './components/Filter';

import './App.css'



function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no Sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

    const [search,setSearch] = useState("");
    const [filter, setFilter] = useState("");


  const addTodo = (text, category) => {
    
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
      );
      setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter />
      <div className="todo-list">
        {todos
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())
        )
        .map((todo) => (
          <Todo 
          key={todo.id}
          todo={todo} 
          removeTodo={removeTodo} 
          completedTodo={completeTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
