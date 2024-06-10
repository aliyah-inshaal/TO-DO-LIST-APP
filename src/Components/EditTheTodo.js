import React,{useState} from 'react';

const EditTodo = ({editTodo, task}) => {
  const [value,setValue] = useState(task.task);

  const handleSubmit = e =>{
    e.preventDefault();
    editTodo(value,task.id);
    setValue("");

  }

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input type="text" className="todo-input" placeholder='Update task' value={value} onChange={(e)=>setValue(e.target.value)} />
      <button type='submit' className='todo-btn'>Update</button>
    </form>
  );
}

export default EditTodo;
