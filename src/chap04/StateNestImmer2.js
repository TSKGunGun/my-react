import { useImmer } from 'use-immer';

export default function StateNestImmer2() {
  const [form, setForm] = useImmer({
    name: '山田太郎',
    address: {
      prefecture: '広島県',
      city: '椿原町',
    }
  });

  const handleNest = e => {
    const ns = e.target.name.split('.');
    setForm(form => {
      if(ns.length === 1) {
        form[ns[0]] = e.target.value;
      } else {
        form[ns[0]][ns[1]] = e.target.value;
      }
    });
  }

  const show = () => {
    console.log(`${form.name} (${form.address.prefecture}・${form.address.city})`);
  }

  return (
    <form>
      <div>
        <label htmlFor='name'>名前：</label>
        <input id='name' name='name' type='text' value={form.name} onChange={handleNest} />
      </div>
      <div>
        <label htmlFor='prefecture'>都道府県：</label>
        <input id='prefecture' name='address.prefecture' type='text' value={form.address.prefecture} onChange={handleNest} />
      </div>
      <div>
        <label htmlFor='city'>市町村：</label>
        <input id='city' name='address.city' type='text' value={form.address.city} onChange={handleNest} />
      </div>
      <div>
        <button type='button' onClick={show}>送信</button>
      </div>
    </form>
  );
}