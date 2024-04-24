import { useState } from 'react';

export default function FormCheckMulti() {
  const [form, setForm] = useState({
    animal: ['dog', 'hamster']
  });

  const handleFormMulti = e => {
    const fa = form.animal;
    if (e.target.checked) {
      fa.push(e.target.value);
    } else {
      fa.splice(fa.indexOf(e.target.value), 1);
    }

    setForm({
      ...form,
      [e.target.name]: fa
    });
  };

  const show = () => {
    console.log(`好きな動物: ${form.animal}`);
  }

  return (
    <form>
      <fieldset>
        <legend>好きな動物：</legend>
        <label htmlFor='dog'>犬</label>
        <input type='checkbox' id='dog' name='animal' value='dog' checked={form.animal.includes('dog')} onChange={handleFormMulti} /><br />
        <label htmlFor='cat'>猫</label>
        <input type='checkbox' id='cat' name='animal' value='cat' checked={form.animal.includes('cat')} onChange={handleFormMulti} /><br />
        <label htmlFor='rabbit'>うさぎ</label>
        <input type='checkbox' id='rabbit' name='animal' value='rabbit' checked={form.animal.includes('rabbit')} onChange={handleFormMulti} /><br />
        <label htmlFor='panda'>パンダ</label>
        <input type='checkbox' id='panda' name='animal' value='panda' checked={form.animal.includes('panda')} onChange={handleFormMulti} /><br />
        <label htmlFor='hamster'>ハムスター</label>
        <input type='checkbox' id='hamster' name='animal' value='hamster' checked={form.animal.includes('hamster')} onChange={handleFormMulti} /><br />
      </fieldset>
      <button type="button" onClick={show}>送信</button>
    </form>
  );
}