import { AiOutlineCloseCircle } from 'react-icons/ai';

function ToDo({ id, text, completed, completeToDo, deleteToDo }) {

  const getColor = (id) => {
    const colors = ["secondary", "ligth", "dark"];
    return colors[id.charCodeAt() % 3];
  }

  return (
    <li className={completed ? "list-group-item list-group-item-success d-flex justify-content-between" :
                               `list-group-item list-group-item-${getColor(id[0])} d-flex justify-content-between`}>
      <span
        role="button"
        onClick={() => completeToDo(id)}>
        {completed ? <del>{text}</del> : text}
      </span>
      <span
        role="button"
        onClick={() => deleteToDo(id)}>
        <AiOutlineCloseCircle className="figure-img" />
      </span>
    </li>
  )
}

export default ToDo

