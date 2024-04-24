import { useForm } from 'react-hook-form'

export default function FormBasic() {
  const defaultValues = {
    name: '名無権兵衛',
    email: 'admin@example.com',
    gender: 'male',
    memo: ''
  }

  const { register, handleSubmit, formState: { errors }} = useForm({
    defaultValues
  });

  const onSubmit = data => {
    console.log(data);
  }

  const onError = err => {
    console.log(err);
  }

  return(
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
      <div>
        <label htmlFor='name'>名前：</label><br />
        <input id='name' type="text"
        {
          ...register('name', {
            required: '名前は必須です',
            maxLength: { 
              value: 20, 
              message: '名前は20文字以内にしてください' }
          })
        }/>
        <div>{errors.name?.message}</div>
      </div>
      <div>
        <label htmlFor='gender'>性別：</label><br />
        <label>
          <input type="radio" value="male"
            {
              ...register('gender', {
                'required': '性別は必須です。'
              })
            }
          />男性
        </label>
        <label>
          <input type="radio" value="female" 
            {
              ...register('gender', {
                'required': '性別は必須です。'
              })
            }
          />女性
        </label>
        <div>{errors.gender?.message}</div>
        <div>
          <label htmlFor='email'>メールアドレス：</label><br />
          <input id='email'type='email'
            {
              ...register('email', {
                required: 'メールアドレスは必須です',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'メールアドレスの形式が正しくありません。'
                }
              })
            }
          />
          <div>{errors.email?.message}</div>
        </div>
        <div>
          <label htmlFor="memo">備考:</label>
          <textarea id="memo"
            {
              ...register('memo', {
                required: '備考は必須入力です。',
                minLength: {
                  value: 10,
                  message: '備考は10文字以上にしてください。'
                },
                validate: {
                  ng: (value, formValues) => {
                    const ngs = ['暴力', '殺', '破壊', 'テロ', '死', 'グロ'];
                    for (const ng of ngs) {
                      if(value.includes(ng)) {
                        return `${ng}はNGワードです。`
                      }
                    }
                    return true;
                  }
                }
              })
            }/>
          <div>{errors.memo?.message}</div>
        </div>
        <div>
          <button type='submit'>送信</button>
        </div>
      </div>
    </form>
  );
};