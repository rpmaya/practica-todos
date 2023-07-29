import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function FormToDo(props) {

  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleSend = (event) => {
    //Para que no se vuelva a cargar la página al enviar el formulario
    event.preventDefault();

    //Creamos un nuevo objeto 
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    //Se lo pasaremos al componente padre ListToDo cuando se envía, tenemos que pasar onSumbit(nombre estándar) como prop desde ListToDo.
    props.onSubmit(newTask);
  };

  return (
    <form className="row g-2"
      onSubmit={handleSend}>
      <div className="input-group mb-3">
        <input
          className='form-control'
          type="text"
          placeholder="Escriba una tarea"
          name="text"
          onChange={handleChange}
        />
        <button className="btn btn-success">
          Añadir tarea
        </button>
      </div>
    </form>
  );
}

export default FormToDo;