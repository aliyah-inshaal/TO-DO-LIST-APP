import React,{useState} from 'react';

const TodoForm = ({addTodo}) => {
  const [value,setValue] = useState("");

  const handleSubmit = e =>{
    e.preventDefault();
    addTodo(value);
    setValue("");

  }

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input type="text" className="todo-input" placeholder='Type here...' value={value} onChange={(e)=>setValue(e.target.value)} />
      <button type='submit' className='todo-btn'>Add task</button>
    </form>
  );
}

export default TodoForm;
