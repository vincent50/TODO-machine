import './App.css';
import CreateTodoButton from './CreateTodoButton';
import TodoCounter from './TodoCounter';
import TodoList from './TodoList';
import { todos } from './todos'
import TodoSearch from './TodoSearch';

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList todos={todos} />
      <CreateTodoButton />
    </>
  );
}

export default App;
