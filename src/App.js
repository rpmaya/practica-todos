import Logo from './components/Logo';
import ListToDo from './components/ListToDo';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container-sm text-center">
      <div className="row row-cols-1">
        <div className="col">
          <Logo />
        </div>
      </div>
      <div className="row row-cols-1 mt-3">
        <div className="col text-bg-light">
            <h1 className="display-6">Mis Tareas</h1>
            <ListToDo />    
        </div>
      </div>
    </div>
  );
}

export default App;
