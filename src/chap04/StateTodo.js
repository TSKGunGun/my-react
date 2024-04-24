import { useState } from 'react';
import './css/StateTodo.css'

let maxId =0;
export default function StateTodo() {
  const [title, setTitle] = useState('');
  const [todo, setTodo] = useState([]);

  const handleChangeTitle = e => {
    setTitle(e.target.value);
  }

  const handleClick = () => {
    setTodo([
      ...todo,
      {
        id: ++maxId,
        title,
        created: new Date(),
        isDone: false
      }
    ])
  };

  const handleDone = e => {
    setTodo(todo.map(item => {
      if (item.id === Number(e.target.dataset.id)) {
        return {
          ...item,
          isDone: true
        }
      } else {
        return item;
      }
    }));
  }

  return (
    <div>
      <label>
        やること：
        <input type='text' value={title} onChange={handleChangeTitle} />  
      </label>
      <button type="button" onClick={handleClick}>追加</button>
      <hr />
      <ul>
        {todo.map(item => (
          <li key={item.id} className={item.isDone ? 'done' : ''}>
            {item.title}
            <button type="button" onClick={handleDone} data-id={item.id}>完了</button>
          </li>
        ))}
      </ul>
    </div>
  );
}