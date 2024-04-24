import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import yup from './yup.jp.js';

yup.addMethod(yup.string, 'ng', function() {
  return this.test('ng', '${path}にNGワードが含まれています。', value => {
    const ngs = ['暴力', '殺', '破壊', 'テロ', '死', 'グロ'];
    for (const ng of ngs) {
      if(value.includes(ng)) {
        return false;
      }
    }
    return true;
  });
})

const schema = yup.object({
  name: yup.string().label('名前').trim().lowercase().transform((value, orgValue) => value.normalize('NFKC')).required().max(20),
  gender: yup.string().label('性別').required(),
  email: yup.string().label('メールアドレス').required().email(),
  memo: yup.string().label('備考').required().min(10).ng()
});

export default function FormYup() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '名無権兵衛',
      email: 'admin@example.com',


      gender: 'male',
      memo: ''
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = data => console.log(data);
  const onError = err => console.log(err);
  
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
    <div>
      <label htmlFor='name'>名前：</label><br />
      <input id='name' type="text"
      {
        ...register('name')
      }/>
      <div>{errors.name?.message}</div>
    </div>
    <div>
      <label htmlFor='gender'>性別：</label><br />
      <label>
        <input type="radio" value="male"
          {
            ...register('gender')
          }
        />男性
      </label>
      <label>
        <input type="radio" value="female" 
          {
            ...register('gender')
          }
        />女性
      </label>
      <div>{errors.gender?.message}</div>
      <div>
        <label htmlFor='email'>メールアドレス：</label><br />
        <input id='email'type='email'
          {
            ...register('email')
          }
        />
        <div>{errors.email?.message}</div>
      </div>
      <div>
        <label htmlFor="memo">備考:</label>
        <textarea id="memo"
          {
            ...register('memo')
          }/>
        <div>{errors.memo?.message}</div>
      </div>
      <div>
        <button type='submit' >送信</button>
        
      </div>
    </div>
  </form>
  );
}