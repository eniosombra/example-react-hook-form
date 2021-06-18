import { useForm } from 'react-hook-form'

import './App.css'

type FormValues = {
  name: string
  email: string
  group: string
}

function App() {
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className="App-header">
      <h1>Cadastro de Cliente</h1>

      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <input {...register('name')} />
        <input {...register('email')} />
        <input {...register('group')} />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export default App
