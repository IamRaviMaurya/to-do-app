import './App.css';
import Header from './comonents/Header';
import ToDo from './comonents/ToDo';
import TodoList from './comonents/TodoList';

function App() {
  return (
    <>
    <Header name = 'To-Do'/>
    <ToDo/>
    <TodoList/>
    <ToDo/>
    </>
  );
}

export default App;
