import { useState } from 'react';

export default function FormSelect() {
  const [form, setForm] = useState({
    animal: 'dog'
  });

  const handleForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const show = () => {
    console.log(`選択した動物: ${form.animal}`);
  }

  return (
    <form>
      <label htmlFor="animal">好きな動物:</label>
      <select id="animal" name="animal" value={form.animal} onChange={handleForm}>
        <option value="dog">犬</option>
        <option value="cat">猫</option>
        <option value="rabbit">うさぎ</option>
        <option value="panda">パンダ</option>
      </select>
      <button type="button" onClick={show}>送信</button>
    </form>
  );
}