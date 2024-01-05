import { useState } from 'react';
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

  return <div className="app">
    <h1>Lista de tarefas</h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo">
          <div className="content">
            <p>{todo.text}</p>            
          </div>
          <div>
            <button>Completar</button>
            <button>x</button>
          </div>
        </div>
      ))}
    </div>
  </div>;
}

export default App;
