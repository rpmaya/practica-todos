import '../styles/Form.css'

function FormToDo(props) {
  return (
    <form className='form-todo'>
      <input
        className='input-todo'
        type='text'
        placeholder="Escriba una tarea"
        name="text"
      />
      <button className='button-todo'>
        Añadir tarea
      </button>
    </form>
  );
}

export default FormToDo;