import { useRecoilState } from 'recoil'
import { useState } from 'react'
import { idsAtom, todoListSelector } from '../store/atom'
import '../chap04/css/StateTodo.css'

export default function RecoilTodo() {
  const [title, setTitle] = useState('');

  const [todo, setTodo] = useRecoilState(todoListSelector);
  const [ids, setIds] = useRecoilState(idsAtom);

  const handleChangeTitle = e => setTitle(e.target.value);

  const handleAdd = () => {
    const newId = Math.max(...(ids.length ? ids : [0])) + 1;

    setTodo({
      type: 'add',
      newItem: {
        id: newId,
        title: title,
        isDone: false
      }
    });
  };

  const handleDone = e => {
    setTodo({
      type: 'done',
      id: Number(e.target.dataset.id)
    })
  };

  const handleRemove = e => {
    setTodo({
      type: 'remove',
      id: Number(e.target.dataset.id)
    });
  }

  return (
    <div>
      <label>
        やること：
        <input type='text' value={title} onChange={handleChangeTitle} />  
      </label>
      <button type="button" onClick={handleAdd}>追加</button>
      <hr />
      <ul>
        {todo.map(item => (
          <li key={item.id} className={item.isDone ? 'done' : ''}>
            {item.title}
            <button type="button" onClick={handleDone} data-id={item.id}>完了</button>
            <button type="button" onClick={handleRemove} data-id={item.id}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );

}