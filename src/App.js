import Logo from './components/Logo';
import FormToDo from './components/FormToDo';

import './App.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="todo-list">
        <h1>Mis Tareas</h1>
        <FormToDo />
      </div>
    </div>
  );
}

export default App;
