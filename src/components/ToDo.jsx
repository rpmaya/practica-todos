import '../styles/Todo.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function ToDo({ text, completed }) { 

  return (
    <div className={completed ? "todo-container completed" : "todo-container"}>
      <div className="todo-text">
        {text}
      </div>
      <div className="todo-icon-container">
        <AiOutlineCloseCircle className="todo-icon" />
      </div>
    </div>
  )
}

export default ToDo

